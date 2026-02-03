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
        background-color: #bfe3ee;
        font-family: Georgia, "Times New Roman", serif;
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

    h3 {
        margin-top: 25px;
    }

    p {
        line-height: 1.6;
        margin-bottom: 20px;
        text-align: justify;
    }

    /* 2nd paragraph */
    .highlight {
        width: 85%;
        margin: 20px auto;
        padding: 15px;
        border: 3px solid green;
        background-color: #ffffff;
    }

    /* 4th and 5th paragraphs */
    .blue-bar {
        background-color: #0a1a8a;
        color: white;
        padding: 15px;
        margin: 20px 0;
    }

    /* Link colors */
    ol a {
        color: blue;
    }

    .resource-link a {
        color: red;
    }

    /* Two-digit ordered list */
    ol {
        list-style-type: decimal-leading-zero;
        margin-left: 40px;
        margin-bottom: 20px;
    }

    /* Table styling */
    table {
        border-collapse: collapse;
        width: 520px;
        margin-top: 10px;
    }

    th {
        background-color: #d9d9d9;
    }

    td {
        background-color: #ffffff;
    }

    th, td {
        border: 1px solid #555;
        padding: 8px;
        text-align: left;
    }
</style>
</head>

<body>

<h1>CSS Examples</h1>

<h2>Paragraphs</h2>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue felis. Pellentesque at magna ut elit suscipit tincidunt et quis magna. Sed eu feugiat orci. Aenean posuere nunc a ornare scelerisque. Pellentesque varius metus in diam vestibulum consequat a id metus. Etiam non semper nibh. Praesent quis porttitor risus. Pellentesque maximus lorem id varius tincidunt. Proin viverra purus mollis turpis molestie, in pulvinar elit auctor. Morbi libero massa, aliquam convallis nisi id, mattis vehicula magna. Nullam libero nunc, molestie a tempor ut, scelerisque sed diam. Nunc tristique consectetur mollis. Nulla venenatis mi massa, sit amet accumsan risus iaculis sed. Phasellus porta sapien at eros rhoncus, ut accumsan est tincidunt.
</p>

<div class="highlight">
<p>
Donec maximus lectus sed ipsum varius ornare. Cras tincidunt lacus sit amet leo viverra, quis bibendum tortor posuere. Etiam a neque non nunc gravida convallis ac eu justo. Nunc dignissim, purus ac dapibus egestas, mauris felis eleifend enim, ac sollicitudin turpis est eu quam. Phasellus sed suscipit nunc. Praesent lobortis mattis rhoncus. Mauris aliquam posuere massa a bibendum.
</p>
</div>

<p>
Mauris id mauris convallis, <em>elementum nibh nec</em>, pulvinar enim. Fusce ac nulla enim. Proin efficitur tincidunt ligula, non commodo nibh sodales in. Nunc pretium elementum suscipit. Aenean pellentesque in quam vel ultrices. Mauris eleifend tellus dignissim nunc pretium, sit amet hendrerit metus consequat. Pellentesque ullamcorper nunc eu ultricies faucibus. Morbi vulputate interdum ligula, at consectetur urna consequat a. Cras aliquet, metus a consectetur congue, sem nisi vehicula nulla, at maximus velit nisl ut diam. Quisque placerat dolor at ex mollis, a tristique massa bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus!
</p>

<div class="blue-bar">
Aliquam erat volutpat. Maecenas consequat sed ante a vehicula. Integer ultricies justo volutpat, convallis erat eu, pellentesque quam. Donec efficitur arcu non porta suscipit. Integer cursus nibh vitae tincidunt aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum lacinia dapibus pharetra. Donec hendrerit, orci non luctus hendrerit, urna ipsum tincidunt erat, quis varius nibh dui non diam
</div>

<div class="blue-bar">
Ut vitae congue nibh, ac faucibus purus. In pulvinar mi id tellus rutrum faucibus. Nunc non massa lorem. Morbi ac arcu nec risus dignissim pretium. Sed in ex dui. Aliquam erat volutpat. Etiam enim eros, pharetra congue gravida eget, bibendum et odio. Integer magna metus, accumsan ut lobortis vitae, eleifend et neque. Sed ut quam mauris. Suspendisse ac ullamcorper nisl. Sed non luctus massa, nec tristique ligula. Vivamus egestas sem euismod lacus eleifend, at fringilla quam mattis. Sed mattis lacus ut rutrum placerat. Fusce finibus lacus in augue pharetra luctus
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

<p class="resource-link">
<a href="https://www.w3schools.com" target="_blank">W3schools.com</a>
has a great resource for HTML, CSS, and JavaScript!
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
        <td>Indicates how the text should have a strong inflection. By default, applies bold to the text.</td>
    </tr>
    <tr>
        <td>img</td>
        <td>Adds an image to the page. Uses the "src" attribute to specify the location of the resource.</td>
    </tr>
</table>

</body>
</html>
