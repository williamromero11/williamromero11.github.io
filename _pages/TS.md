---
permalink: /TS/
title: "CSS Transitions and Selectors"
layout: page
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MyBlog.com</title>
    <link rel="stylesheet" href="/assets/css/stylessss.css">
</head>
<body>

<div id="container">

    <!-- NAVIGATION -->
    <nav id="sidebar">
        <ul class="menu">
            <li class="nav-item recent">
                Recent Articles
                <ul class="submenu">
                    <li><a href="#a1">Article 1</a></li>
                    <li><a href="#a2">Article 2</a></li>
                    <li><a href="#a3">Article 3</a></li>
                    <li><a href="#a4">Article 4</a></li>
                </ul>
            </li>
            <li class="nav-item">Services</li>
            <li class="nav-item">Mission</li>
            <li class="nav-item">About Us</li>
        </ul>
    </nav>

    <!-- MAIN CONTENT -->
    <main id="content">
        <header id="header">
            <h1>MyBlog.com</h1>
        </header>

        <h2>Recent Journal Articles</h2>

        <section class="articles">

            <article id="a1" class="article">
                <h3>Article 1</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <article id="a2" class="article">
                <h3>Article 2</h3>
                <p>Sed sed neque eget justo venenatis rutrum vitae quis ante.</p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <article id="a3" class="article">
                <h3>Article 3</h3>
                <p>Vivamus lectus ante, venenatis sed placerat id.</p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <article id="a4" class="article">
                <h3>Article 4</h3>
                <p>Proin mi ipsum, egestas in diam nec.</p>
                <a href="https://www.google.com">Read more...</a>
            </article>

        </section>
    </main>

</div>

</body>
</html>
