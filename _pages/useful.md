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

  .ip-card,
  .map-card,
  .tool-box {
    background: #001b18;
    border: 2px solid #d69b18;
    border-radius: 18px;
    box-sizing: border-box;
  }

  .ip-card,
  .map-card {
    padding: 20px;
  }

  .ip-card h2,
  .map-card h2,
  .tool-box h3 {
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

  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
    margin-top: 10px;
  }

  .tool-box {
    padding: 24px 28px 28px;
    min-height: 230px;
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
          <span id="vpnBadge" class="mini-badge">VPN: Unknown</span>
          <span id="hostingBadge" class="mini-badge">Hosting: Unknown</span>
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

    <section class="map-card">
      <h2>Map</h2>
      <div id="map"></div>
      <p class="ip-note" id="mapCaption">
        Map will load after the IP geolocation lookup finishes.
      </p>
    </section>
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

  function inferHosting(org = "") {
    const value = org.toLowerCase();
    const hostingKeywords = [
      "amazon", "aws", "google cloud", "microsoft", "azure", "digitalocean",
      "linode", "vultr", "hetzner", "ovh", "oracle cloud", "cloudflare",
      "choopa", "contabo", "netcup", "hostwinds"
    ];
    return hostingKeywords.some(keyword => value.includes(keyword));
  }

  function inferVpn(org = "") {
    const value = org.toLowerCase();
    const vpnKeywords = [
      "nord", "mullvad", "proton", "surfshark", "expressvpn", "pia",
      "private internet access", "cyberghost", "windscribe", "tunnelbear"
    ];
    return vpnKeywords.some(keyword => value.includes(keyword));
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
    vpnBadge.textContent = `VPN: ${vpn ? "Yes" : "No"}`;
    hostingBadge.textContent = `Hosting: ${hosting ? "Yes" : "No"}`;

    panel.style.display = "block";
  }

  function buildBasicRiskFromIpapi(data) {
    const org = data.org || "";
    const vpn = inferVpn(org);
    const hosting = inferHosting(org);

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

  loadIpInfo();
</script>
