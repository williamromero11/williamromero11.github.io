---
permalink: /CSS/
title: "Basic CSS"
layout: page
---
<html lang="en">
<head>
<meta charset="UTF-8">
<title>CSS Examples</title>

<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Georgia, "Times New Roman", serif;
        background-color: #bfe3ee;
        padding: 30px;
        color: #000;
    }

    h1 {
        text-align: center;
        font-size: 40px;
        margin-bottom: 25px;
    }

    h2 {
        margin: 30px 0 15px;
    }

    p {
        margin-bottom: 20px;
        line-height: 1.6;
        text-align: justify;
    }

    /* Green bordered paragraph */
    .highlight {
        border: 3px solid green;
        padding: 15px;
        margin: 20px 0;
        background-color: #fff;
    }

    /* Dark blue bars */
    .blue-bar {
        background-color: #0a1a8a;
        color: white;
        padding: 15px;
        margin: 20px 0;
    }

    /* Lists */
    ol {
        margin-left: 30px;
        margin-bottom: 20px;
    }

    ol li {
        margin-bottom: 5px;
    }

    a {
        color: blue;
    }

    /* Table styling */
    table {
        border-collapse: collapse;
        width: 500px;
        margin-top: 10px;
        background-color: #fff;
    }

    th, td {
        border: 1px solid #555;
        padding: 6px 10px;
        text-align: left;
    }

    th {
        background-color: #e0e0e0;
    }
</style>
</head>

<body>

<h1>CSS Examples</h1>

<h2>Paragraphs</h2>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue felis. Pellentesque at magna ut elit suscipit tincidunt et quis magna. Sed eu feugiat orci. Aenean posuere nunc a ornare scelerisque. Pellentesque varius metus in diam vestibulum consequat a id metus. Etiam non semper nibh. Praesent quis porttitor risus.
</p>

<div class="highlight">
<p>
Donec maximus lectus sed ipsum varius ornare. Cras tincidunt lacus sit amet leo viverra, quis bibendum tortor posuere. Etiam a neque non nunc gravida convallis ac eu justo. Nunc dignissim, purus ac dapibus egestas, mauris felis eleifend enim, ac sollicitudin turpis est eu quam.
</p>
</div>

<p>
Mauris id mauris convallis, <em>elementum nibh nec</em>, pulvinar enim. Fusce ac nulla enim. Proin efficitur tincidunt ligula, non commodo nibh sodales in. Nunc pretium elementum suscipit. Aenean pellentesque in quam vel ultrices.
</p>

<div class="blue-bar">
Aliquam erat volutpat. Maecenas consequat sed ante a vehicula. Integer ultricies justo volutpat, convallis erat eu, pellentesque quam. Donec efficitur arcu non porta suscipit.
</div>

<div class="blue-bar">
Ut vitae congue nibh, ac faucibus purus. In pulvinar mi id tellus rutrum faucibus. Nunc non massa lorem. Morbi ac arcu nec risus dignissim pretium.
</div>

<h2>Lists, Links, and Tables</h2>

<ol>
    <li><a href="#">Item 1</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 4</a></li>
    <li><a href="#">Item 5</a></li>
</ol>

<h3>Common HTML Tags</h3>

<p>
<a href="https://www.w3schools.com" target="_blank">W3Schools.com</a> has a great resource for HTML, CSS, and JavaScript!
</p>

<table>
    <tr>
        <th>Tag</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>table</td>
        <td>Root for tabular data to be displayed on the page.</td>
    </tr>
    <tr>
        <td>p</td>
        <td>Defines a paragraph. Considered a block element.</td>
    </tr>
    <tr>
        <td>a</td>
        <td>"Anchor", or link. Lets users navigate to another page.</td>
    </tr>
    <tr>
        <td>strong</td>
        <td>Indicates strong importance. Usually bold text.</td>
    </tr>
    <tr>
        <td>img</td>
        <td>Adds an image to the page using the src attribute.</td>
    </tr>
</table>

</body>
</html>
