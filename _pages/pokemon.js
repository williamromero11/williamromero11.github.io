// Pokemon Team Builder JS
// Uses fetch() + PokéAPI + caching

(() => {
  const $ = id => document.getElementById(id);

  const input = $("pokeInput");
  const btnLoad = $("btnLoad");
  const resultPanel = $("resultPanel");
  const title = $("pokeTitle");
  const img = $("pokeImg");
  const audio = $("pokeAudio");
  const err = $("err");
  const status = $("status");

  const moveSelects = [
    $("move1"),
    $("move2"),
    $("move3"),
    $("move4")
  ];

  const btnAdd = $("btnAdd");
  const teamList = $("teamList");

  let currentPokemon = null;

  // ---------- CACHING ----------
  const CACHE_PREFIX = "poke-cache-";
  const CACHE_TIME = 1000 * 60 * 60 * 24; // 24 hours

  function getCached(key) {
    const raw = localStorage.getItem(CACHE_PREFIX + key);
    if (!raw) return null;

    const cached = JSON.parse(raw);
    if (Date.now() - cached.time > CACHE_TIME) return null;

    return cached.data;
  }

  function setCached(key, data) {
    localStorage.setItem(
      CACHE_PREFIX + key,
      JSON.stringify({ time: Date.now(), data })
    );
  }

  // ---------- FETCH ----------
  async function loadPokemon(query) {
    const key = query.toLowerCase();
    const cached = getCached(key);
    if (cached) return cached;

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`);
    if (!response.ok) throw new Error("Pokemon not found");

    const data = await response.json();
    setCached(key, data);
    return data;
  }

  // ---------- RENDER ----------
  function renderPokemon(p) {
    currentPokemon = p;

    title.textContent = `${p.name} (#${p.id})`;

    img.src =
      p.sprites.other["official-artwork"].front_default ||
      p.sprites.front_default;

    audio.src = p.cries.latest || p.cries.legacy || "";
    audio.load();

    const moves = p.moves.map(m => m.move.name);

    moveSelects.forEach(select => {
      select.innerHTML = "";
      moves.forEach(move => {
        const option = document.createElement("option");
        option.value = move;
        option.textContent = move;
        select.appendChild(option);
      });
    });

    resultPanel.hidden = false;
  }

  // ---------- EVENTS ----------
  btnLoad.addEventListener("click", async () => {
    err.textContent = "";
    status.textContent = "Loading...";

    try {
      const pokemon = await loadPokemon(input.value.trim());
      renderPokemon(pokemon);
      status.textContent = "Loaded!";
    } catch (e) {
      err.textContent = e.message;
      status.textContent = "";
      resultPanel.hidden = true;
    }
  });

  btnAdd.addEventListener("click", () => {
    if (!currentPokemon) return;

    const moves = moveSelects.map(s => s.value);

    const div = document.createElement("div");
    div.innerHTML = `
      <h3>${currentPokemon.name}</h3>
      <img src="${img.src}" width="96">
      <ul>
        ${moves.map(m => `<li>${m}</li>`).join("")}
      </ul>
    `;

    teamList.appendChild(div);
  });
})();
