---
permalink: /useful/
title: "Useful"
layout: page
---
<style>
  .tools-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    max-width: 1000px;
    margin: 40px auto;
  }

  .tool-box {
    background: #0f1f1b;
    border: 2px solid #d69b18;
    border-radius: 12px;
    padding: 20px;
    transition: transform 0.2s ease, background 0.2s ease;
  }

  .tool-box:hover {
    transform: translateY(-5px);
    background: #142a24;
  }

  .tool-box h3 {
    margin-top: 0;
    color: #f1b733;
  }

  .tool-box p {
    font-size: 14px;
    line-height: 1.5;
    color: #e6e6e6;
  }

  .tool-box a {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 14px;
    background: #d69b18;
    color: #000;
    text-decoration: none;
    border-radius: 6px;
    font-weight: bold;
  }

  .tool-box a:hover {
    background: #f1b733;
  }
</style>

<h1 style="text-align:center;">Cybersecurity &amp; Networking Tools</h1>

<div class="tools-grid">
  <div class="tool-box">
    <h3>IPInfo</h3>
    <p>Lookup IP address details such as ISP, ASN, geolocation, and ownership.</p>
    <a href="https://ipinfo.io" target="_blank">Open Tool</a>
  </div>

  <div class="tool-box">
    <h3>AbuseIPDB</h3>
    <p>Check whether an IP address has been reported for malicious activity.</p>
    <a href="https://www.abuseipdb.com" target="_blank">Open Tool</a>
  </div>

  <div class="tool-box">
    <h3>VirusTotal</h3>
    <p>Analyze suspicious files, hashes, domains, URLs, and IP addresses.</p>
    <a href="https://www.virustotal.com" target="_blank">Open Tool</a>
  </div>

  <div class="tool-box">
    <h3>Shodan</h3>
    <p>Search for internet-connected devices, services, and exposed systems.</p>
    <a href="https://www.shodan.io" target="_blank">Open Tool</a>
  </div>

  <div class="tool-box">
    <h3>DNS Checker</h3>
    <p>Verify DNS records and propagation across global DNS servers.</p>
    <a href="https://dnschecker.org" target="_blank">Open Tool</a>
  </div>

  <div class="tool-box">
    <h3>crt.sh</h3>
    <p>Search certificate transparency logs for issued SSL/TLS certificates.</p>
    <a href="https://crt.sh" target="_blank">Open Tool</a>
  </div>
</div>
