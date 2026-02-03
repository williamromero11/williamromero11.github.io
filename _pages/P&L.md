---
permalink: /P&L/
title: "Positioning and Layout"
layout: page
---
/* ---------- Global Reset ---------- */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Georgia, "Times New Roman", serif;
    line-height: 1.6;
}

/* ---------- Jump Menu (LEFT SIDEBAR) ---------- */
#jumpMenu {
    position: fixed;
    top: 0;
    left: 0;
    width: 15%;
    height: 100vh;
    background-color: #f0f0f0;
    padding: 15px;
    overflow-y: auto;
}

#jumpMenu a {
    display: block;
    margin-bottom: 6px;
    color: blue;
    text-decoration: none;
}

/* ---------- Header (TOP, FIXED) ---------- */
#header {
    position: fixed;
    top: 0;
    left: 15%;
    width: 85%;
    background-color: #ffffff;
    border-bottom: 2px solid #000;
    padding: 15px;
    text-align: center;
    z-index: 1000;
}

#header h1 {
    margin-bottom: 10px;
}

#header button {
    margin: 0 5px;
    padding: 5px 10px;
}

/* ---------- Main Content Area ---------- */
#content {
    margin-left: 15%;
    padding-top: 120px;
    padding-left: 20px;
    padding-right: 20px;
}

/* ---------- Articles Layout ---------- */
.articles {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.article {
    width: 300px;
    background-color: #fafafa;
    border: 1px solid #ccc;
    padding: 15px;
}

.article h2 {
    margin-bottom: 10px;
}

.article a {
    color: blue;
}

/* ---------- Thank You Block (BOTTOM-RIGHT) ---------- */
#thankyou {
    position: fixed;
    bottom: 10px;
    right: 10px;
    background-color: #ddd;
    padding: 10px 15px;
    border: 1px solid #333;
}
