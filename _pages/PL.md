---
permalink: /PL/
title: "CSS Position and layout"
layout: page
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MyBlog.com</title>

    <!-- IMPORTANT: correct CSS path -->
    <link rel="stylesheet" href="assets/css/stylesss.css">
</head>
<body>

<!-- LEFT JUMP MENU -->
<div id="jump-menu">
    <h2>Jump to an<br>Article</h2>
    <a href="#a1">Article 1</a>
    <a href="#a2">Article 2</a>
    <a href="#a3">Article 3</a>
    <a href="#a4">Article 4</a>
    <a href="#a5">Article 5</a>
    <a href="#a6">Article 6</a>
    <a href="#a7">Article 7</a>
    <a href="#a8">Article 8</a>
    <a href="#a9">Article 9</a>
    <a href="#a10">Article 10</a>
</div>

<!-- FIXED HEADER -->
<div id="header">
    <h1>MyBlog.com</h1>
    <div id="nav">
        <a href="#">Recent Articles</a>
        <a href="#">Services</a>
        <a href="#">Mission</a>
        <a href="#">About Us</a>
    </div>
</div>

<!-- MAIN CONTENT -->
<div id="content">
    <h2 class="section-title">Recent Journal Articles</h2>

    <div id="articles">

        <div class="article" id="a1">
            <h3>Article 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna, efficitur a facilisis id, venenatis in elit. Nulla dictum vel metus at auctor.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a2">
            <h3>Article 2</h3>
            <p>Sed sed neque eget justo venenatis rutrum vitae quis ante. Sed ut iaculis dui, eget commodo nisi.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a3">
            <h3>Article 3</h3>
            <p>Vivamus lectus ante, venenatis sed placerat id, pretium a est. Nulla facilisi.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a4">
            <h3>Article 4</h3>
            <p>Proin mi ipsum, egestas in diam nec, volutpat scelerisque est.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a5">
            <h3>Article 5</h3>
            <p>Sed suscipit vestibulum felis ut aliquam. Pellentesque tincidunt justo non velit consectetur.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a6">
            <h3>Article 6</h3>
            <p>Phasellus nunc sapien, dignissim in magna id, egestas condimentum erat.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a7">
            <h3>Article 7</h3>
            <p>Mauris tempus ligula euismod massa commodo vehicula.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a8">
            <h3>Article 8</h3>
            <p>Integer at ligula semper, viverra enim et, malesuada urna.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a9">
            <h3>Article 9</h3>
            <p>Sed at augue nec turpis condimentum vulputate.</p>
            <a href="#">Read more...</a>
        </div>

        <div class="article" id="a10">
            <h3>Article 10</h3>
            <p>Sed erat elit, maximus ut ullamcorper vitae, mattis vel ante.</p>
            <a href="#">Read more...</a>
        </div>

    </div>
</div>

<!-- THANK YOU BOX -->
<div id="thank-you">
    Thank you for visiting!
</div>

</body>
</html>
