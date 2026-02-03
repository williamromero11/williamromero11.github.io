---
permalink: /CSS/
title: "Basic CSS"
layout: page
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Examples - GitHub Pages</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        /* Base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            line-height: 1.6;
            color: #24292e;
            background-color: #f6f8fa;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }
        
        /* GitHub-like header */
        .github-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0;
            margin-bottom: 30px;
            border-bottom: 1px solid #e1e4e8;
        }
        
        .github-header h1 {
            color: #24292e;
            font-size: 2rem;
        }
        
        .github-links {
            display: flex;
            gap: 15px;
        }
        
        .github-btn {
            display: flex;
            align-items: center;
            gap: 6px;
            padding: 8px 16px;
            background-color: #f6f8fa;
            border: 1px solid #d1d5da;
            border-radius: 6px;
            color: #24292e;
            text-decoration: none;
            font-size: 14px;
            font-weight: 500;
            transition: all 0.2s;
        }
        
        .github-btn:hover {
            background-color: #f3f4f6;
            border-color: #959da5;
        }
        
        /* Section styling */
        section {
            background-color: white;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
            padding: 30px;
            margin-bottom: 30px;
            box-shadow: 0 1px 3px rgba(27, 31, 35, 0.04);
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        section:hover {
            box-shadow: 0 3px 12px rgba(27, 31, 35, 0.08);
            transform: translateY(-2px);
        }
        
        h2 {
            color: #0366d6;
            border-bottom: 1px solid #eaecef;
            padding-bottom: 10px;
            margin-bottom: 20px;
            font-size: 1.8rem;
        }
        
        h3 {
            color: #24292e;
            margin: 25px 0 15px;
            font-size: 1.4rem;
        }
        
        /* Paragraph styling */
        .paragraphs p {
            margin-bottom: 20px;
            text-align: justify;
        }
        
        .paragraphs p:first-child:first-letter {
            font-size: 2.5rem;
            font-weight: bold;
            color: #0366d6;
            float: left;
            line-height: 1;
            margin-right: 8px;
            margin-top: 4px;
        }
        
        .paragraphs em {
            font-style: italic;
            color: #22863a;
            background-color: #f0fff4;
            padding: 0 4px;
            border-radius: 3px;
        }
        
        hr {
            border: none;
            height: 1px;
            background-color: #e1e4e8;
            margin: 30px 0;
        }
        
        /* List styling */
        .lists ol {
            counter-reset: item;
            margin-left: 20px;
            margin-bottom: 25px;
        }
        
        .lists li {
            counter-increment: item;
            margin-bottom: 10px;
            padding-left: 10px;
        }
        
        .lists li:before {
            content: counter(item, decimal-leading-zero) ". ";
            color: #0366d6;
            font-weight: bold;
            margin-right: 8px;
        }
        
        /* Link styling */
        .external-link {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            color: #0366d6;
            text-decoration: none;
            font-weight: 500;
            padding: 6px 12px;
            background-color: #f1f8ff;
            border-radius: 6px;
            margin-bottom: 25px;
            transition: all 0.2s;
        }
        
        .external-link:hover {
            background-color: #dbedff;
            text-decoration: underline;
        }
        
        /* Table styling */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 15px;
            border: 1px solid #e1e4e8;
            border-radius: 6px;
            overflow: hidden;
        }
        
        th {
            background-color: #f6f8fa;
            color: #24292e;
            font-weight: 600;
            padding: 12px 15px;
            text-align: left;
            border-bottom: 2px solid #e1e4e8;
        }
        
        td {
            padding: 12px 15px;
            border-bottom: 1px solid #eaecef;
        }
        
        tr:last-child td {
            border-bottom: none;
        }
        
        tr:hover {
            background-color: #f6f8fa;
        }
        
        /* Footer styling */
        footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #e1e4e8;
            color: #6a737d;
            font-size: 0.9rem;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            body {
                padding: 15px;
            }
            
            .github-header {
                flex-direction: column;
                gap: 15px;
                text-align: center;
            }
            
            section {
                padding: 20px;
            }
            
            h2 {
                font-size: 1.5rem;
            }
            
            table {
                display: block;
                overflow-x: auto;
            }
        }
        
        /* GitHub Pages badge */
        .github-badge {
            display: inline-block;
            background-color: #24292e;
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 0.8rem;
            margin-left: 10px;
            vertical-align: middle;
        }
    </style>
</head>
<body>
    <header class="github-header">
        <h1>CSS Examples <span class="github-badge">GitHub Pages</span></h1>
        <div class="github-links">
            <a href="https://pages.github.com" class="github-btn" target="_blank">
                <i class="fab fa-github"></i> GitHub Pages
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" class="github-btn" target="_blank">
                <i class="fas fa-code"></i> CSS Docs
            </a>
        </div>
    </header>

    <section class="paragraphs">
        <h2>Paragraphs</h2>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget augue felis. Pellentesque at magna ut elit suscipit tincidunt et quis magna. Sed eu feugiat orci. Aenean posuere nunc a ornare scelerisque. Pellentesque varius metus in diam vestibulum consequat a id metus. Etiam non semper nibh. Praesent quis porttitor risus. Pellentesque maximus lorem id varius tincidunt. Proin viverra purus mollis turpis molestie, in pulvinar elit auctor. Morbi libero massa, aliquam convallis nisi id, mattis vehicula magna. Nullam libero nunc, molestie a tempor ut, scelerisque sed diam. Nunc tristique consectetur mollis. Nulla venenatis mi massa, sit amet accumsan risus iaculis sed. Phasellus porta sapien at eros rhoncus, ut accumsan est tincidunt.</p>

        <p>Donec maximus lectus sed ipsum varius ornare. Cras tincidunt lacus sit amet leo viverra, quis bibendum tortor posuere. Etiam a neque non nunc gravida convallis ac eu justo. Nunc dignissim, purus ac dapibus egestas, mauris felis eleifend enim, ac sollicitudin turpis est eu quam. Phasellus sed suscipit nunc. Praesent lobortis mattis rhoncus. Mauris aliquam posuere massa a bibendum.</p>

        <p>Mauris id mauris convallis, <em>elementum nibh nec</em>, pulvinar enim. Fusce ac nulla enim. Proin efficitur tincidunt ligula, non commodo nibh sodales in. Nunc pretium elementum suscipit. Aenean pellentesque in quam vel ultrices. Mauris eleifend tellus dignissim nunc pretium, sit amet hendrerit metus consequat. Pellentesque ullamcorper nunc eu ultricies faucibus. Morbi vulputate interdum ligula, at consectetur urna consequat a. Cras aliquet, metus a consectetur congue, sem nisi vehicula nulla, at maximus velit nisl ut diam. Quisque placerat dolor at ex mollis, a tristique massa bibendum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus!</p>

        <p>Aliquam erat volutpat. Maecenas consequat sed ante a vehicula. Integer ultricies justo volutpat, convallis erat eu, pellentesque quam. Donec efficitur arcu non porta suscipit. Integer cursus nibh vitae tincidunt aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum lacinia dapibus pharetra. Donec hendrerit, orci non luctus hendrerit, urna ipsum tincidunt erat, quis varius nibh dui non diam.</p>

        <p>Ut vitae congue nibh, ac faucibus purus. In pulvinar mi id tellus rutrum faucibus. Nunc non massa lorem. Morbi ac arcu nec risus dignissim pretium. Sed in ex dui. Aliquam erat volutpat. Etiam enim eros, pharetra congue gravida eget, bibendum et odio. Integer magna metus, accumsan ut lobortis vitae, eleifend et neque. Sed ut quam mauris. Suspendisse ac ullamcorper nisl. Sed non luctus massa, nec tristique ligula. Vivamus egestas sem euismod lacus eleifend, at fringilla quam mattis. Sed mattis lacus ut rutrum placerat. Fusce finibus lacus in augue pharetra luctus.</p>
    </section>

    <hr>

    <section class="lists">
        <h2>Lists, Links, and Tables</h2>
        
        <ol>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
            <li>Item 5</li>
        </ol>
        
        <a href="https://www.w3schools.com" class="external-link" target="_blank">
            <i class="fas fa-external-link-alt"></i> W3schools.com has a great resource for HTML, CSS, and JavaScript!
        </a>
        
        <h3>Common HTML Tags</h3>
        
        <table>
            <thead>
                <tr>
                    <th>Tag</th>
                    <th>Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><code>&lt;table&gt;</code></td>
                    <td>Root for tabular data to be displayed on the page.</td>
                </tr>
                <tr>
                    <td><code>&lt;p&gt;</code></td>
                    <td>Defines a paragraph. Considered a block element.</td>
                </tr>
                <tr>
                    <td><code>&lt;a&gt;</code></td>
                    <td>"Anchor", or link. Lets users navigate to another page.</td>
                </tr>
                <tr>
                    <td><code>&lt;strong&gt;</code></td>
                    <td>Indicates how the text should have a strong inflection. By default, applies bold to the text.</td>
                </tr>
                <tr>
                    <td><code>&lt;img&gt;</code></td>
                    <td>Adds an image to the page. Uses the "src" attribute to specify the location of the resource.</td>
                </tr>
            </tbody>
        </table>
    </section>

    <footer>
        <p>Styled for GitHub Pages &bull; CSS Examples &bull; Created with HTML5 & CSS3</p>
        <p><i class="far fa-copyright"></i> 2023 - All content for educational purposes</p>
    </footer>

    <script>
        // Simple script for GitHub Pages enhancement
        document.addEventListener('DOMContentLoaded', function() {
            // Add current year to footer
            const yearSpan = document.querySelector('footer p:last-child');
            const currentYear = new Date().getFullYear();
            yearSpan.innerHTML = yearSpan.innerHTML.replace('2023', currentYear);
            
            // Add hover effect to table rows
            const tableRows = document.querySelectorAll('tbody tr');
            tableRows.forEach(row => {
                row.addEventListener('mouseenter', function() {
                    this.style.transition = 'background-color 0.2s';
                });
            });
            
            // Log page load for GitHub Pages demo
            console.log('CSS Examples page loaded successfully for GitHub Pages');
        });
    </script>
</body>
</html>
