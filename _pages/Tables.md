---
permalink: /Tables/
title: "Tables & Forms"
layout: page
---
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pizza Ordering Form</title>
    <style>
        :root {
            --text-color: #2c3e50;
            --background-color: #f0fff4;
            --heading-color: #1a472a;
            --border-color: #27ae60;
            --input-bg: white;
            --fieldset-bg: #f9fffb;
            --legend-bg: #d4f7df;
            --table-header-bg: #27ae60;
            --table-header-color: white;
            --table-row-even: #f0faf4;
            --button-bg: #27ae60;
            --button-hover: #219653;
            --error-color: #e74c3c;
            --success-bg: #d4f7df;
        }
        
        @media (prefers-color-scheme: dark) {
            :root {
                --text-color: #e0e0e0;
                --background-color: #1a2a1a;
                --heading-color: #4caf7a;
                --border-color: #4caf7a;
                --input-bg: #2a3a2a;
                --fieldset-bg: #223322;
                --legend-bg: #1a472a;
                --table-header-bg: #1a472a;
                --table-header-color: #e0e0e0;
                --table-row-even: #2a3a2a;
                --button-bg: #27ae60;
                --button-hover: #4caf7a;
                --error-color: #ff6b6b;
                --success-bg: #1a472a;
            }
        }
        
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: var(--background-color);
            color: var(--text-color);
            transition: all 0.3s ease;
        }
        
        h1, h2 {
            color: var(--heading-color);
            border-bottom: 2px solid var(--border-color);
            padding-bottom: 5px;
        }
        
        form {
            background-color: var(--input-bg);
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            margin-bottom: 30px;
            border: 1px solid var(--border-color);
        }
        
        fieldset {
            border: 2px solid var(--border-color);
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
            background-color: var(--fieldset-bg);
        }
        
        legend {
            font-weight: bold;
            color: var(--heading-color);
            padding: 0 15px;
            font-size: 1.1em;
            background-color: var(--legend-bg);
            border-radius: 4px;
            border: 1px solid var(--border-color);
        }
        
        label {
            display: block;
            margin-bottom: 10px;
            color: var(--text-color);
            font-weight: 500;
        }
        
        input[type="text"],
        input[type="tel"],
        input[type="email"],
        select,
        textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 20px;
            border: 2px solid var(--border-color);
            border-radius: 6px;
            box-sizing: border-box;
            background-color: var(--input-bg);
            color: var(--text-color);
            font-size: 16px;
            transition: all 0.3s ease;
        }
        
        input:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border-color: var(--button-hover);
            box-shadow: 0 0 5px rgba(76, 175, 122, 0.3);
        }
        
        .checkbox-group {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            gap: 12px;
            margin-bottom: 15px;
        }
        
        .checkbox-item {
            display: flex;
            align-items: center;
            padding: 8px;
            background-color: var(--fieldset-bg);
            border-radius: 4px;
            border: 1px solid var(--border-color);
        }
        
        input[type="checkbox"],
        input[type="radio"] {
            margin-right: 10px;
            accent-color: var(--border-color);
        }
        
        button {
            background-color: var(--button-bg);
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 6px;
            cursor: pointer;
            font-weight: bold;
            display: block;
            margin: 0 auto;
            width: 200px;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: var(--button-hover);
        }
        
        .required {
            color: var(--error-color);
            font-weight: bold;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 30px;
            background-color: var(--input-bg);
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
            border: 2px solid var(--border-color);
        }
        
        th, td {
            padding: 12px 15px;
            text-align: left;
            border: 1px solid var(--border-color);
            color: var(--text-color);
        }
        
        th {
            background-color: var(--table-header-bg);
            color: var(--table-header-color);
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background-color: var(--table-row-even);
        }
        
        caption {
            font-size: 1.4em;
            font-weight: bold;
            margin-bottom: 15px;
            text-align: left;
            color: var(--heading-color);
        }
        
        hr {
            border: none;
            height: 2px;
            background-color: var(--border-color);
            margin: 30px 0;
        }
        
        .instructions {
            color: var(--text-color);
            font-style: italic;
            margin-top: -5px;
            margin-bottom: 20px;
            opacity: 0.9;
        }
        
        .error {
            color: var(--error-color);
            font-size: 0.9em;
            margin-top: -15px;
            margin-bottom: 15px;
            display: none;
        }
        
        .success {
            background-color: var(--success-bg);
            color: var(--heading-color);
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
            border: 2px solid var(--border-color);
            display: none;
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: var(--heading-color);
        }
        
        /* Dark mode specific fixes */
        @media (prefers-color-scheme: dark) {
            input[type="text"],
            input[type="tel"],
            input[type="email"],
            select,
            textarea {
                border-color: #4caf7a;
            }
            
            .checkbox-item {
                background-color: #2a3a2a;
            }
            
            option {
                background-color: #2a3a2a;
                color: #e0e0e0;
            }
            
            /* Ensure placeholder text is visible */
            ::placeholder {
                color: #a0a0a0;
                opacity: 0.8;
            }
            
            /* Make sure all text is visible */
            h1, h2, legend, caption, label {
                color: #4caf7a !important;
            }
            
            /* Make the select dropdown text visible */
            select {
                color: #e0e0e0;
            }
            
            /* Make the textarea text visible */
            textarea {
                color: #e0e0e0;
            }
            
            /* Fix for the table footer */
            tfoot td {
                background-color: #1a472a;
                color: #e0e0e0;
            }
        }
        
        /* Add a dark mode toggle for users who want to switch manually */
        .dark-mode-toggle {
            position: fixed;
            top: 20px;
            right: 20px;
            background-color: var(--button-bg);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        }
    </style>
</head>
<body>
    <!-- Dark mode toggle button -->
    <button class="dark-mode-toggle" id="darkModeToggle" title="Toggle dark mode">🌓</button>
    
    <header>
        <h1>Pizza Ordering Form</h1>
    </header>

    <main>
        <!-- Success message (hidden by default) -->
        <div id="successMessage" class="success">
            <h3>✅ Order Submitted Successfully!</h3>
            <p>Thank you for your order. Your pizza will be ready soon!</p>
        </div>

        <form id="pizzaForm">
            <fieldset>
                <legend>Contact Information <span class="required">*</span></legend>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your full name">
                    <div class="error" id="nameError">Please enter your name</div>
                </div>
                <div>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number">
                    <div class="error" id="phoneError">Please enter a valid phone number</div>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email address">
                    <div class="error" id="emailError">Please enter a valid email address</div>
                </div>
            </fieldset>

            <hr>

            <fieldset>
                <legend>Select Pizza Size <span class="required">*</span></legend>
                <label for="size">Pizza Size:</label>
                <select id="size" name="size" required>
                    <option value="" selected disabled>Select Size--</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">XLarge</option>
                </select>
                <div class="error" id="sizeError">Please select a pizza size</div>
            </fieldset>

            <fieldset>
                <legend>Select Sauce <span class="required">*</span></legend>
                <p class="instructions">Choose one sauce option:</p>
                <div class="checkbox-group">
                    <div class="checkbox-item">
                        <input type="radio" id="marinara" name="sauce" value="marinara" required>
                        <label for="marinara">Marinara</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="radio" id="ranch" name="sauce" value="ranch">
                        <label for="ranch">Ranch</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="radio" id="no_sauce" name="sauce" value="no_sauce">
                        <label for="no_sauce">No Sauce</label>
                    </div>
                </div>
                <div class="error" id="sauceError">Please select a sauce option</div>
            </fieldset>

            <fieldset>
                <legend>Select Toppings</legend>
                <p class="instructions">Choose as many as you like (at least 6 options available):</p>
                <div class="checkbox-group">
                    <div class="checkbox-item">
                        <input type="checkbox" id="pepperoni" name="toppings" value="pepperoni">
                        <label for="pepperoni">Pepperoni</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="sausage" name="toppings" value="sausage">
                        <label for="sausage">Sausage</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="mushrooms" name="toppings" value="mushrooms">
                        <label for="mushrooms">Mushrooms</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="pineapple" name="toppings" value="pineapple">
                        <label for="pineapple">Pineapple</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="peppers" name="toppings" value="peppers">
                        <label for="peppers">Peppers</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="onions" name="toppings" value="onions">
                        <label for="onions">Onions</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="olives" name="toppings" value="olives">
                        <label for="olives">Olives</label>
                    </div>
                    <div class="checkbox-item">
                        <input type="checkbox" id="bacon" name="toppings" value="bacon">
                        <label for="bacon">Bacon</label>
                    </div>
                </div>
            </fieldset>

            <fieldset>
                <legend>Additional Instructions</legend>
                <label for="instructions">Special requests or delivery notes:</label>
                <textarea id="instructions" name="instructions" rows="4" placeholder="Add instructions"></textarea>
            </fieldset>

            <button type="submit">Submit Order</button>
        </form>

        <hr>

        <section>
            <h2>List of My Favorite Games</h2>
            <table>
                <caption>My Favorite Video Games</caption>
                <thead>
                    <tr>
                        <th scope="col">Developer</th>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                        <th scope="col">Genre</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowspan="2">Nintendo</td>
                        <td>The Legend of Zelda: Breath of the Wild</td>
                        <td>2017</td>
                        <td rowspan="2">Action-Adventure</td>
                    </tr>
                    <tr>
                        <td>Super Mario Odyssey</td>
                        <td>2017</td>
                    </tr>
                    <tr>
                        <td>Rockstar Games</td>
                        <td>Red Dead Redemption 2</td>
                        <td>2018</td>
                        <td>Action-Adventure</td>
                    </tr>
                    <tr>
                        <td>FromSoftware</td>
                        <td>Elden Ring</td>
                        <td>2022</td>
                        <td>Action RPG</td>
                    </tr>
                    <tr>
                        <td>Mojang</td>
                        <td>Minecraft</td>
                        <td>2011</td>
                        <td>Sandbox</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="4" style="text-align: center; font-weight: bold; background-color: var(--table-row-even);">Count: 5</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 William's Pizza Ordering Form. All rights reserved.</p>
    </footer>

    <script>
        // Form submission handler
        document.getElementById('pizzaForm').addEventListener('submit', function(event) {
            event.preventDefault();
            
            const errorElements = document.querySelectorAll('.error');
            errorElements.forEach(error => {
                error.style.display = 'none';
            });
            
            document.getElementById('successMessage').style.display = 'none';
            
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const size = document.getElementById('size').value;
            const sauceSelected = document.querySelector('input[name="sauce"]:checked');
            
            let isValid = true;
            
            if (!name) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phone || !phoneRegex.test(phone.replace(/\D/g, ''))) {
                document.getElementById('phoneError').style.display = 'block';
                isValid = false;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            if (!size) {
                document.getElementById('sizeError').style.display = 'block';
                isValid = false;
            }
            
            if (!sauceSelected) {
                document.getElementById('sauceError').style.display = 'block';
                isValid = false;
            }
            
            if (isValid) {
                document.getElementById('successMessage').style.display = 'block';
                document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
            }
        });
        
        // Real-time validation
        document.getElementById('name').addEventListener('blur', function() {
            if (!this.value.trim()) {
                document.getElementById('nameError').style.display = 'block';
            } else {
                document.getElementById('nameError').style.display = 'none';
            }
        });
        
        document.getElementById('phone').addEventListener('blur', function() {
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!this.value.trim() || !phoneRegex.test(this.value.replace(/\D/g, ''))) {
                document.getElementById('phoneError').style.display = 'block';
            } else {
                document.getElementById('phoneError').style.display = 'none';
            }
        });
        
        document.getElementById('email').addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!this.value.trim() || !emailRegex.test(this.value)) {
                document.getElementById('emailError').style.display = 'block';
            } else {
                document.getElementById('emailError').style.display = 'none';
            }
        });
        
        document.getElementById('size').addEventListener('change', function() {
            if (!this.value) {
                document.getElementById('sizeError').style.display = 'block';
            } else {
                document.getElementById('sizeError').style.display = 'none';
            }
        });
        
        document.querySelectorAll('input[name="sauce"]').forEach(radio => {
            radio.addEventListener('change', function() {
                document.getElementById('sauceError').style.display = 'none';
            });
        });
        
        // Dark mode toggle functionality
        document.getElementById('darkModeToggle').addEventListener('click', function() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Update toggle button text
            this.textContent = newTheme === 'dark' ? '🌞' : '🌓';
        });
        
        // Check for saved theme preference or system preference
        function initTheme() {
            const savedTheme = localStorage.getItem('theme');
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                document.documentElement.setAttribute('data-theme', 'dark');
                document.getElementById('darkModeToggle').textContent = '🌞';
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                document.getElementById('darkModeToggle').textContent = '🌓';
            }
        }
        
        // Initialize theme on page load
        initTheme();
    </script>
</body>
</html>
