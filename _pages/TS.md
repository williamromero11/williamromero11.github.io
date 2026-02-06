---
permalink: /TS/
title: "CSS Transitions and Selectors"
layout: page
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>MyBlog.com</title>
    <link rel="stylesheet" href="/assets/css/stylessss.css">
</head>
<body>

<div id="container">

    <!-- SIDEBAR -->
    <nav id="sidebar">
        <ul class="menu">
            <li class="nav-item recent">
                Recent Articles
                <ul class="submenu">
                    <li><a href="#a1">Article 1</a></li>
                    <li><a href="#a2">Article 2</a></li>
                    <li><a href="#a3">Article 3</a></li>
                    <li><a href="#a4">Article 4</a></li>
                    <li><a href="#a5">Article 5</a></li>
                    <li><a href="#a6">Article 6</a></li>
                    <li><a href="#a7">Article 7</a></li>
                    <li><a href="#a8">Article 8</a></li>
                    <li><a href="#a9">Article 9</a></li>
                    <li><a href="#a10">Article 10</a></li>
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

            <!-- ARTICLE 1 -->
            <article id="a1" class="article">
                <h3>Article 1</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros magna,
                    efficitur a facilisis id, venenatis in elit. Nulla dictum vel metus at auctor.
                    Integer venenatis pretium mauris id ultrices. Duis sagittis ligula eget erat
                    hendrerit, ut lobortis libero mollis. Sed molestie vehicula quam, non accumsan
                    odio pulvinar ac. Quisque placerat purus tortor, sed viverra turpis orci in neque.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 2 -->
            <article id="a2" class="article">
                <h3>Article 2</h3>
                <p>
                    Sed sed neque eget justo venenatis rutrum vitae quis ante. Sed ut iaculis dui,
                    eget commodo nisi. Etiam et arcu ipsum. Praesent porta eu nisi a malesuada.
                    Nunc cursus facilisis ligula, in porttitor nisl pulvinar ultrices. Pellentesque
                    consectetur venenatis ex, non lacinia metus lobortis vel.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 3 -->
            <article id="a3" class="article">
                <h3>Article 3</h3>
                <p>
                    Vivamus lectus ante, venenatis sed placerat id, pretium a est. Nulla facilisi.
                    Curabitur vestibulum malesuada lectus, nec gravida nibh blandit ultrices.
                    Curabitur euismod neque eget volutpat lacinia. Donec dictum luctus placerat.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 4 -->
            <article id="a4" class="article">
                <h3>Article 4</h3>
                <p>
                    Proin mi ipsum, egestas in diam nec, volutpat scelerisque est. Proin quis
                    ullamcorper lorem. Quisque fringilla non magna ac suscipit. Sed scelerisque,
                    massa ut aliquam faucibus, nisi ante volutpat velit, vel pretium mi erat ut ante.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 5 -->
            <article id="a5" class="article">
                <h3>Article 5</h3>
                <p>
                    Sed suscipit vestibulum felis ut aliquam. Pellentesque tincidunt justo non velit
                    consectetur consectetur. Etiam malesuada massa et felis placerat tincidunt.
                    Nam mollis cursus odio, eget interdum neque feugiat eu. Duis non neque vel lacus
                    commodo hendrerit.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 6 -->
            <article id="a6" class="article">
                <h3>Article 6</h3>
                <p>
                    Phasellus nunc sapien, dignissim in magna id, egestas condimentum erat. Fusce ac
                    consectetur velit, ac iaculis nisi. Pellentesque volutpat mi non arcu sodales,
                    id euismod sem pulvinar. Curabitur id mauris et metus faucibus aliquam.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 7 -->
            <article id="a7" class="article">
                <h3>Article 7</h3>
                <p>
                    Mauris tempus ligula euismod massa commodo vehicula. Praesent euismod feugiat
                    posuere. Etiam convallis tellus quis eleifend pulvinar. Nullam tempor, turpis
                    tincidunt sagittis suscipit, velit enim iaculis leo, nec egestas sapien erat vitae velit.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 8 -->
            <article id="a8" class="article">
                <h3>Article 8</h3>
                <p>
                    Integer at ligula semper, viverra enim et, malesuada urna. Praesent porttitor,
                    eros ut pellentesque imperdiet, metus eros eleifend felis, eu tempor felis odio
                    at turpis. Suspendisse potenti. Proin sollicitudin placerat orci.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 9 -->
            <article id="a9" class="article">
                <h3>Article 9</h3>
                <p>
                    Sed at augue nec turpis condimentum vulputate. Donec tincidunt, turpis dapibus
                    viverra vehicula, dui lectus gravida justo, et rhoncus arcu ante in augue.
                    Vivamus odio dolor, eleifend non mi venenatis, cursus suscipit diam.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

            <!-- ARTICLE 10 -->
            <article id="a10" class="article">
                <h3>Article 10</h3>
                <p>
                    Sed erat elit, maximus ut ullamcorper vitae, mattis vel ante. Donec tempus a
                    libero et consectetur. Integer quis erat sit amet sem fringilla bibendum.
                    Nullam venenatis purus eget porttitor fringilla. Donec porta magna id vehicula ultrices.
                </p>
                <a href="https://www.google.com">Read more...</a>
            </article>

        </section>

    </main>

</div>

<div id="thank-you">Thank you for visiting!</div>

</body>
</html>
