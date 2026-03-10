(() => {
  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);

  const pokeInput = $("pokeInput");
  const btnFind = $("btnFind");
  const err = $("err");
  const status = $("status");

  const pokeImg = $("pokeImg");
  const pokeAudio = $("pokeAudio");

  const moveSelects = [$("move1"), $("move2"), $("move3"), $("move4")];
  const btnAdd = $("btnAdd");

  const teamEl = $("team");
  const teamEmpty = $("teamEmpty");

  let currentPokemon = null;

  // ---------- PLACEHOLDER (looks like sample #1) ----------
  // Just a “static noise” placeholder so the page isn't empty before searching.
  // You can replace this with any image URL you want.
  const PLACEHOLDER_IMG = "/_pages/pokeball.png";
  

  pokeImg.src = PLACEHOLDER_IMG;
  pokeAudio.removeAttribute("src");
  pokeAudio.load();

  // ---------- CACHING ----------
  // localStorage cache with TTL (minimizes API calls)
  const CACHE_PREFIX = "pokeapi:pokemon:";
  const CACHE_TTL_MS = 1000 * 60 * 60 * 24; // 24 hours

  function keyify(input) {
    return String(input).trim().toLowerCase();
  }

  function cacheGet(key) {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;

    try {
      const obj = JSON.parse(raw);
      if (!obj || !obj.ts || !obj.data) return null;
      if (Date.now() - obj.ts > CACHE_TTL_MS) return null;
      return obj.data;
    } catch {
      return null;
    }
  }

  function cacheSet(key, data) {
    try {
      localStorage.setItem(
        CACHE_PREFIX + key,
        JSON.stringify({ ts: Date.now(), data })
      );
    } catch {
      // ignore quota errors
    }
  }

  async function getPokemon(input) {
    const key = keyify(input);
    if (!key) throw new Error("Enter a Pokémon name or ID.");

    const cached = cacheGet(key);
    if (cached) return { data: cached, fromCache: true };

    const url = `https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(key)}`;
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error("Pokémon not found. Try: ditto, pikachu, or 1-151.");
    }

    const data = await resp.json();

    // cache by the query AND by canonical name/id
    cacheSet(key, data);
    if (data?.name) cacheSet(keyify(data.name), data);
    if (data?.id) cacheSet(String(data.id), data);

    return { data, fromCache: false };
  }

  // ---------- MOVES DROPDOWNS ----------
  function fillMoves(moves) {
    // default “blank” option like sample (empty select)
    const defaultOpt = `<option value="" selected></option>`;
    const opts = moves
      .map((m) => `<option value="${m}">${m}</option>`)
      .join("");

    const html = defaultOpt + opts;

    for (const sel of moveSelects) {
      sel.innerHTML = html;
      sel.selectedIndex = 0;
      sel.disabled = moves.length === 0;
    }
  }

  // ---------- RENDER POKEMON ----------
  function renderPokemon(p) {
    currentPokemon = p;

    // Image: prefer official artwork, fallback to sprite
    const imageUrl =
      p.sprites?.other?.["official-artwork"]?.front_default ||
      p.sprites?.front_default ||
      "";

    pokeImg.src = imageUrl || PLACEHOLDER_IMG;
    pokeImg.alt = p.name ? p.name : "Pokemon";

    // Audio cry
    const cry = p.cries?.latest || p.cries?.legacy || "";
    if (cry) {
      pokeAudio.src = cry;
    } else {
      pokeAudio.removeAttribute("src");
    }
    pokeAudio.load();

    // Moves list (sorted)
    const moves = (p.moves || [])
      .map((x) => x.move?.name)
      .filter(Boolean)
      .sort((a, b) => a.localeCompare(b));

    fillMoves(moves);
  }

  // ---------- TEAM STORAGE ----------
  const TEAM_KEY = "pokemon-team-builder:team";

  function loadTeam() {
    try {
      return JSON.parse(localStorage.getItem(TEAM_KEY)) || [];
    } catch {
      return [];
    }
  }

  function saveTeam(team) {
    localStorage.setItem(TEAM_KEY, JSON.stringify(team));
  }

  function uuid() {
    return crypto?.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2);
  }

  function renderTeam() {
    const team = loadTeam();
    teamEl.innerHTML = "";

    teamEmpty.style.display = team.length ? "none" : "block";

    for (const member of team) {
      const card = document.createElement("div");
      card.className = "card";

      const row = document.createElement("div");
      row.className = "smallRow";

      const h3 = document.createElement("h3");
      h3.textContent = `${member.name} (#${member.id})`;

      const remove = document.createElement("button");
      remove.className = "removeBtn";
      remove.type = "button";
      remove.textContent = "Remove";
      remove.addEventListener("click", () => {
        const updated = loadTeam().filter((m) => m.uuid !== member.uuid);
        saveTeam(updated);
        renderTeam();
      });

      row.appendChild(h3);
      row.appendChild(remove);

      const im = document.createElement("img");
      im.src = member.image || "";
      im.alt = member.name;

      const ul = document.createElement("ul");
      for (const mv of member.moves) {
        const li = document.createElement("li");
        li.textContent = mv;
        ul.appendChild(li);
      }

      card.appendChild(row);
      card.appendChild(im);
      card.appendChild(ul);
      teamEl.appendChild(card);
    }
  }

  // ---------- EVENTS ----------
  function setError(msg) {
    err.textContent = msg || "";
  }
  function setStatus(msg) {
    status.textContent = msg || "";
  }

  btnFind.addEventListener("click", async () => {
    setError("");
    setStatus("Loading...");

    try {
      const { data, fromCache } = await getPokemon(pokeInput.value);
      renderPokemon(data);
      setStatus(fromCache ? "Loaded from cache." : "Loaded from API.");
    } catch (e) {
      currentPokemon = null;
      pokeImg.src = PLACEHOLDER_IMG;
      pokeAudio.removeAttribute("src");
      pokeAudio.load();
      fillMoves([]);
      setError(e.message || "Error loading Pokémon.");
      setStatus("");
    }
  });

  pokeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btnFind.click();
  });

  btnAdd.addEventListener("click", () => {
    setError("");
    if (!currentPokemon) {
      setError("Find a Pokémon first.");
      return;
    }

    const chosen = moveSelects.map((s) => s.value).filter(Boolean);
    if (chosen.length !== 4) {
      setError("Select 4 moves before adding to team.");
      return;
    }

    const imageUrl =
      currentPokemon.sprites?.other?.["official-artwork"]?.front_default ||
      currentPokemon.sprites?.front_default ||
      "";

    const team = loadTeam();
    team.push({
      uuid: uuid(),
      id: currentPokemon.id,
      name: currentPokemon.name,
      image: imageUrl,
      moves: chosen
    });

    saveTeam(team);
    renderTeam();
    setStatus(`Added ${currentPokemon.name} to team.`);
  });

  // initial UI
  fillMoves([]);
  renderTeam();
})();
