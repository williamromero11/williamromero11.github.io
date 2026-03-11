---
permalink: /useful/
title: "Useful"
layout: page
---
---
permalink: /ip-tool/
title: "IP Info"
layout: page
---

<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
  crossorigin=""
/>

<style>
  .ip-wrapper {
    max-width: 1100px;
    margin: 30px auto;
    padding: 0 20px;
    color: #e6e6e6;
  }

  .ip-title {
    text-align: center;
    margin-bottom: 24px;
  }

  .ip-grid {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 22px;
    align-items: start;
  }

  .ip-card,
  .map-card {
    background: #001b18;
    border: 2px solid #d69b18;
    border-radius: 18px;
    padding: 20px;
    box-sizing: border-box;
  }

  .ip-card h2,
  .map-card h2 {
    margin-top: 0;
    color: #f1b733;
  }

  .ip-list {
    display: grid;
    gap: 12px;
  }

  .ip-row {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(214, 155, 24, 0.2);
  }

  .ip-label {
    font-weight: 700;
    color: #f1b733;
  }

  .ip-value {
    word-break: break-word;
  }

  #map {
    width: 100%;
    height: 420px;
    border-radius: 12px;
    overflow: hidden;
  }

  .ip-note {
    margin-top: 12px;
    font-size: 14px;
    color: #cfcfcf;
  }

  .loading,
  .error {
    padding: 12px 0;
  }

  .error {
    color: #ff8f8f;
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

<div class="ip-wrapper">
  <h1 class="ip-title">Your Public IP & Location</h1>

  <div class="ip-grid">
    <section class="ip-card">
      <h2>IP Details</h2>
      <div id="ipStatus" class="loading">Loading IP information...</div>
      <div id="ipInfo" class="ip-list" style="display:none;"></div>
      <p class="ip-note">
        This is approximate IP-based geolocation, not precise GPS.
      </p>
    </section>

    <section class="map-card">
      <h2>Map</h2>
      <div id="map"></div>
      <p class="ip-note" id="mapCaption">
        Map will load after the IP geolocation lookup finishes.
      </p>
    </section>
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

  let map;
  let marker;

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

      addRow("IP", data.ip);
      addRow("City", data.city);
      addRow("Region", data.region);
      addRow("Country", data.country_name);
      addRow("Postal", data.postal);
      addRow("Timezone", data.timezone);
      addRow("ISP / Org", data.org);
      addRow("ASN", data.asn);

      const lat = Number(data.latitude);
      const lon = Number(data.longitude);

      if (!Number.isNaN(lat) && !Number.isNaN(lon)) {
        map = L.map("map").setView([lat, lon], 9);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(
          `<strong>${data.city || "Unknown city"}</strong><br>${data.region || ""} ${data.country_name || ""}<br>IP: ${data.ip || "N/A"}`
        ).openPopup();

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
