---
permalink: /useful/
title: "Useful"
layout: page
---

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin=""
/>

<style>
  .page-wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px 50px;
    color: #e6e6e6;
  }

  .section-title {
    text-align: center;
    margin: 10px 0 28px;
    color: #f5f5f5;
  }

  .ip-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 22px;
    align-items: start;
    margin-bottom: 40px;
  }

  .map-column {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .ip-card,
  .map-card,
  .tool-box,
  .vpn-recommend,
  .breach-check-card {
    background: #001b18;
    border: 2px solid #d69b18;
    border-radius: 18px;
    box-sizing: border-box;
  }

  .ip-card,
  .map-card,
  .breach-check-card {
    padding: 20px;
  }

  .ip-card h2,
  .map-card h2,
  .tool-box h3,
  .breach-check-card h3 {
    margin-top: 0;
    color: #f1b733;
  }

  .flag-row {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 4px 0 18px;
    font-size: 18px;
    color: #f5f5f5;
  }

  .flag-emoji {
    font-size: 28px;
    line-height: 1;
  }

  .risk-panel {
    margin: 0 0 18px;
  }

  .risk-badge-row {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .risk-badge,
  .mini-badge {
    display: inline-block;
    padding: 8px 12px;
    border-radius: 999px;
    font-weight: 700;
    font-size: 14px;
  }

  .risk-badge {
    background: #2d2d2d;
    color: #fff;
  }

  .risk-low {
    background: #1f7a1f;
    color: #fff;
  }

  .risk-medium {
    background: #b7791f;
    color: #fff;
  }

  .risk-high {
    background: #b00020;
    color: #fff;
  }

  .mini-badge {
    background: #24322f;
    color: #f1f1f1;
    border: 1px solid rgba(214, 155, 24, 0.35);
  }

  .ip-list {
    display: grid;
    gap: 12px;
  }

  .ip-row {
    display: grid;
    grid-template-columns: 110px 1fr;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(214, 155, 24, 0.18);
  }

  .ip-label {
    font-weight: 700;
    color: #f1b733;
  }

  .ip-value {
    word-break: break-word;
  }

  .ip-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
  }

  .ip-actions a {
    display: inline-block;
    padding: 10px 16px;
    background: #d69b18;
    color: #000;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
  }

  .ip-actions a:hover {
    background: #f1b733;
  }

  #map {
    width: 100%;
    height: 390px;
    border-radius: 12px;
    overflow: hidden;
  }

  .ip-note {
    margin-top: 12px;
    font-size: 14px;
    color: #d7d7d7;
  }

  .loading,
  .error {
    padding: 12px 0;
  }

  .error {
    color: #ff9c9c;
  }

  .vpn-recommend {
    padding: 18px;
  }

  .vpn-recommend a {
    display: flex;
    align-items: center;
    gap: 18px;
    text-decoration: none;
  }

  .vpn-recommend img {
    height: 56px;
    width: auto;
    display: block;
  }

  .vpn-text {
    color: #f5f5f5;
    font-size: 14px;
    line-height: 1.5;
  }

  .vpn-text strong {
    color: #f1b733;
    font-size: 18px;
  }

  .breach-check-card p {
    color: #f0f0f0;
    font-size: 14px;
    line-height: 1.6;
  }

  .breach-form {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 14px;
  }

  .breach-form input {
    flex: 1 1 260px;
    padding: 12px 14px;
    border-radius: 10px;
    border: 1px solid rgba(214, 155, 24, 0.35);
    background: #0b2621;
    color: #f5f5f5;
    font-size: 14px;
  }

  .breach-form input::placeholder {
    color: #cfcfcf;
  }

  .breach-form button {
    padding: 12px 18px;
    border: none;
    border-radius: 10px;
    background: #d69b18;
    color: #000;
    font-weight: 700;
    cursor: pointer;
  }

  .breach-form button:hover {
    background: #f1b733;
  }

  .breach-note {
    margin-top: 12px;
    color: #d7d7d7;
    font-size: 13px;
  }

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 10px;
  }

  .tool-box {
    padding: 24px 28px 28px;
    min-height: 230px;
    transition: all 0.2s ease;
  }

  .tool-box:hover {
    transform: translateY(-5px);
    background: #142a24;
  }

  .tool-box p {
    font-size: 14px;
    line-height: 1.6;
    color: #f0f0f0;
    margin-bottom: 26px;
  }

  .tool-box a {
    display: inline-block;
    padding: 12px 20px;
    background: #d69b18;
    color: #000;
    text-decoration: none;
    border-radius: 10px;
    font-weight: 700;
  }

  .tool-box a:hover {
    background: #f1b733;
  }

  @media (max-width: 900px) {
    .ip-grid {
      grid-template-columns: 1fr;
    }

    #map {
      height: 320px;
    }
  }
</style>

<div class="page-wrap">
  <h1 class="section-title">Cybersecurity &amp; Networking Tools</h1>

  <div class="ip-grid">
    <section class="ip-card">
      <h2>IP Details</h2>

      <div id="countryFlagRow" class="flag-row" style="display:none;">
        <span id="countryFlag" class="flag-emoji"></span>
        <span id="countryFlagText"></span>
      </div>

      <div id="riskPanel" class="risk-panel" style="display:none;">
        <div class="risk-badge-row">
          <span id="riskBadge" class="risk-badge">Risk: Unknown</span>
          <span id="vpnBadge" class="mini-badge">Possible VPN: Unknown</span>
          <span id="hostingBadge" class="mini-badge">Possible Hosting: Unknown</span>
        </div>
      </div>

      <div id="ipStatus" class="loading">Loading IP information...</div>
      <div id="ipInfo" class="ip-list" style="display:none;"></div>

      <p class="ip-note">
        This is approximate IP-based geolocation, not precise GPS.
      </p>

      <div class="ip-actions" id="ipActions" style="display:none;">
        <a id="abuseLink" href="#" target="_blank" rel="noopener noreferrer">Check on AbuseIPDB</a>
        <a id="vtLink" href="#" target="_blank" rel="noopener noreferrer">Check on VirusTotal</a>
        <a id="shodanLink" href="#" target="_blank" rel="noopener noreferrer">Check on Shodan</a>
      </div>
    </section>

    <div class="map-column">
      <section class="map-card">
        <h2>Map</h2>
        <div id="map"></div>
        <p class="ip-note" id="mapCaption">
          Map will load after the IP geolocation lookup finishes.
        </p>
      </section>

      <div class="vpn-recommend">
        <a href="https://mullvad.net" target="_blank" rel="noopener noreferrer">
          <img src="/_pages/mullvad.png" alt="Mullvad VPN">
          <div class="vpn-text">
            <strong>Mullvad VPN</strong><br>
            Protect your identity online with a privacy-focused VPN.
          </div>
        </a>
      </div>

      <div class="vpn-recommend">
        <a href="https://tails.net" target="_blank" rel="noopener noreferrer">
          <img src="/_pages/tails.png" alt="Tails OS">
          <div class="vpn-text">
            <strong>Tails OS</strong><br>
            A portable operating system designed for anonymity and privacy.
          </div>
        </a>
      </div>

      <div class="vpn-recommend">
        <a href="https://www.torproject.org/" target="_blank" rel="noopener noreferrer">
          <img src="/_pages/tor.jfif" alt="Tor Browser">
          <div class="vpn-text">
            <strong>Tor Browser</strong><br>
            Browse the internet anonymously using the Tor network.
          </div>
        </a>
      </div>

      <div class="vpn-recommend">
        <a href="https://proton.me/" target="_blank" rel="noopener noreferrer">
          <img src="/_pages/proton.jfif" alt="Proton Privacy Suite">
          <div class="vpn-text">
            <strong>Proton Privacy Suite</strong><br>
            Secure email, VPN, and cloud services focused on privacy.
          </div>
        </a>
      </div>

      <div class="breach-check-card">
        <h3>Email Breach Checker</h3>
        <p>
          Check whether an email address has appeared in known data breaches.
        </p>

        <div class="breach-form">
          <input type="email" id="breachEmail" placeholder="Enter email address">
          <button type="button" id="breachBtn">Check Email</button>
        </div>

        <p class="breach-note">
          Opens the official Have I Been Pwned breach database in a new tab.
        </p>
      </div>
    </div>
  </div>

  <div class="tools-grid">
    <div class="tool-box">
      <h3>IPInfo</h3>
      <p>Lookup IP address details such as ISP, ASN, geolocation, and ownership.</p>
      <a href="https://ipinfo.io" target="_blank" rel="noopener noreferrer">Open Tool</a>
    </div>

    <div class="tool-box">
      <h3>AbuseIPDB</h3>
      <p>Check whether an IP address has been reported for malicious activity.</p>
      <a href="https://www.abuseipdb.com" target="_blank" rel="noopener noreferrer">Open Tool</a>
    </div>

    <div class="tool-box">
      <h3>VirusTotal</h3>
      <p>Analyze suspicious files, hashes, domains, URLs, and IP addresses.</p>
      <a href="https://www.virustotal.com" target="_blank" rel="noopener noreferrer">Open Tool</a>
    </div>

    <div class="tool-box">
      <h3>Shodan</h3>
      <p>Search for internet-connected devices, services, and exposed systems.</p>
      <a href="https://www.shodan.io" target="_blank" rel="noopener noreferrer">Open Tool</a>
    </div>

    <div class="tool-box">
      <h3>DNS Checker</h3>
      <p>Verify DNS records and propagation across global DNS servers.</p>
      <a href="https://dnschecker.org" target="_blank" rel="noopener noreferrer">Open Tool</a>
    </div>

    <div class="tool-box">
      <h3>crt.sh</h3>
      <p>Search certificate transparency logs for issued SSL/TLS certificates.</p>
      <a href="https://crt.sh" target="_blank" rel="noopener noreferrer">Open Tool</a>
    </div>
  </div>
</div>

<script
  src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
  integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
  crossorigin=""
></script>

<script>
  const statusEl = document.getElementById("ipStatus");
  const infoEl = document.getElementById("ipInfo");
  const mapCaptionEl = document.getElementById("mapCaption");

  function addRow(label, value) {
    const row = document.createElement("div");
    row.className = "ip-row";

    const left = document.createElement("div");
    left.className = "ip-label";
    left.textContent = label;

    const right = document.createElement("div");
    right.className = "ip-value";
    right.textContent = value || "N/A";

    row.appendChild(left);
    row.appendChild(right);
    infoEl.appendChild(row);
  }

  function countryCodeToFlagEmoji(code) {
    if (!code || code.length !== 2) return "🌍";
    return String.fromCodePoint(
      ...code.toUpperCase().split("").map(char => 127397 + char.charCodeAt())
    );
  }

  function showCountryFlag(countryCode, countryName) {
    const row = document.getElementById("countryFlagRow");
    const flag = document.getElementById("countryFlag");
    const text = document.getElementById("countryFlagText");

    flag.textContent = countryCodeToFlagEmoji(countryCode);
    text.textContent = countryName || "Unknown Country";
    row.style.display = "flex";
  }

  function inferHosting(data = {}) {
    const combined = [
      data.org || "",
      data.asn || "",
      data.city || "",
      data.region || "",
      data.country_name || ""
    ].join(" ").toLowerCase();

    const hostingKeywords = [
      "amazon", "aws", "google cloud", "microsoft", "azure", "digitalocean",
      "linode", "vultr", "hetzner", "ovh", "oracle cloud", "cloudflare",
      "choopa", "contabo", "netcup", "hostwinds", "datacenter", "data center",
      "hosting", "server", "colo", "leaseweb", "m247", "datacamp"
    ];

    return hostingKeywords.some(keyword => combined.includes(keyword));
  }

  function inferVpn(data = {}) {
    const combined = [
      data.org || "",
      data.asn || "",
      data.city || "",
      data.region || "",
      data.country_name || ""
    ].join(" ").toLowerCase();

    const vpnKeywords = [
      "nord", "mullvad", "proton", "surfshark", "expressvpn", "pia",
      "private internet access", "cyberghost", "windscribe", "tunnelbear",
      "vpn", "wireguard", "m247", "datacamp", "leaseweb", "ovh", "choopa"
    ];

    return vpnKeywords.some(keyword => combined.includes(keyword));
  }

  function renderRiskPanel({ riskLevel, vpn, hosting }) {
    const panel = document.getElementById("riskPanel");
    const riskBadge = document.getElementById("riskBadge");
    const vpnBadge = document.getElementById("vpnBadge");
    const hostingBadge = document.getElementById("hostingBadge");

    riskBadge.className = "risk-badge";
    if (riskLevel === "Low") riskBadge.classList.add("risk-low");
    if (riskLevel === "Medium") riskBadge.classList.add("risk-medium");
    if (riskLevel === "High") riskBadge.classList.add("risk-high");

    riskBadge.textContent = `Risk: ${riskLevel}`;
    vpnBadge.textContent = `Possible VPN: ${vpn ? "Yes" : "No"}`;
    hostingBadge.textContent = `Possible Hosting: ${hosting ? "Yes" : "No"}`;

    panel.style.display = "block";
  }

  function buildBasicRiskFromIpapi(data) {
    const vpn = inferVpn(data);
    const hosting = inferHosting(data);

    let riskLevel = "Low";
    if (hosting || vpn) riskLevel = "Medium";
    if (hosting && vpn) riskLevel = "High";

    renderRiskPanel({ riskLevel, vpn, hosting });
  }

  function setInvestigationLinks(ip) {
    const actions = document.getElementById("ipActions");
    const abuseLink = document.getElementById("abuseLink");
    const vtLink = document.getElementById("vtLink");
    const shodanLink = document.getElementById("shodanLink");

    abuseLink.href = `https://www.abuseipdb.com/check/${encodeURIComponent(ip)}`;
    vtLink.href = `https://www.virustotal.com/gui/ip-address/${encodeURIComponent(ip)}`;
    shodanLink.href = `https://www.shodan.io/host/${encodeURIComponent(ip)}`;

    actions.style.display = "flex";
  }

  async function loadIpInfo() {
    try {
      const res = await fetch("https://ipapi.co/json/");
      if (!res.ok) {
        throw new Error("Failed to fetch IP information.");
      }

      const data = await res.json();

      statusEl.style.display = "none";
      infoEl.style.display = "grid";
      infoEl.innerHTML = "";

      showCountryFlag(data.country_code, data.country_name);
      buildBasicRiskFromIpapi(data);

      addRow("IP", data.ip);
      addRow("City", data.city);
      addRow("Region", data.region);
      addRow("Country", data.country_name);
      addRow("Postal", data.postal);
      addRow("Timezone", data.timezone);
      addRow("ISP / Org", data.org);
      addRow("ASN", data.asn);

      if (data.ip) {
        setInvestigationLinks(data.ip);
      }

      const lat = Number(data.latitude);
      const lon = Number(data.longitude);

      if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
        const map = L.map("map").setView([lat, lon], 9);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        L.marker([lat, lon]).addTo(map)
          .bindPopup(
            `<strong>${data.city || "Unknown city"}</strong><br>${data.region || ""} ${data.country_name || ""}<br>IP: ${data.ip || "N/A"}`
          )
          .openPopup();

        mapCaptionEl.textContent =
          `Approximate location based on IP geolocation: ${data.city || "Unknown city"}, ${data.region || ""}, ${data.country_name || ""}.`;
      } else {
        mapCaptionEl.textContent = "Latitude/longitude not available for this IP.";
      }
    } catch (err) {
      statusEl.className = "error";
      statusEl.textContent = "Could not load IP information right now.";
      mapCaptionEl.textContent = "Map unavailable.";
      console.error(err);
    }
  }

  function setupBreachChecker() {
    const breachBtn = document.getElementById("breachBtn");
    const breachEmail = document.getElementById("breachEmail");

    if (!breachBtn || !breachEmail) return;

    breachBtn.addEventListener("click", () => {
      const email = breachEmail.value.trim();
      if (!email) return;

      const target = `https://haveibeenpwned.com/account/${encodeURIComponent(email)}`;
      window.open(target, "_blank", "noopener,noreferrer");
    });

    breachEmail.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        breachBtn.click();
      }
    });
  }

  loadIpInfo();
  setupBreachChecker();
</script>
