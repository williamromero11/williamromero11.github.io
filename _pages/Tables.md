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
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f0fff4; /* Mint background color */
            color: #2c3e50; /* Dark blue-gray for better contrast against mint */
        }
        
        h1, h2 {
            color: #1a472a; /* Dark green for headings */
            border-bottom: 2px solid #27ae60;
            padding-bottom: 5px;
        }
        
        form {
            background-color: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            margin-bottom: 30px;
            border: 1px solid #a3d9b1;
        }
        
        fieldset {
            border: 2px solid #27ae60;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 25px;
            background-color: #f9fffb;
        }
        
        legend {
            font-weight: bold;
            color: #1a472a; /* Dark green */
            padding: 0 15px;
            font-size: 1.1em;
            background-color: #d4f7df;
            border-radius: 4px;
            border: 1px solid #27ae60;
        }
        
        label {
            display: block;
            margin-bottom: 10px;
            color: #2c3e50; /* Dark text for good contrast */
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
            border: 2px solid #a3d9b1;
            border-radius: 6px;
            box-sizing: border-box;
            background-color: white;
            color: #2c3e50;
            font-size: 16px;
        }
        
        input[type="text"]:focus,
        input[type="tel"]:focus,
        input[type="email"]:focus,
        select:focus,
        textarea:focus {
            outline: none;
            border-color: #27ae60;
            box-shadow: 0 0 5px rgba(39, 174, 96, 0.3);
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
            background-color: #f0faf4;
            border-radius: 4px;
            border: 1px solid #d1f2e0;
        }
        
        input[type="checkbox"],
        input[type="radio"] {
            margin-right: 10px;
            transform: scale(1.2);
        }
        
        button {
            background-color: #27ae60;
            color: white;
            border: none;
            padding: 15px 30px;
            font-size: 18px;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            font-weight: bold;
            display: block;
            margin: 0 auto;
            width: 200px;
        }
        
        button:hover {
            background-color: #219653;
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }
        
        .required {
            color: #e74c3c;
            font-weight: bold;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 30px;
            background-color: white;
            box-shadow: 0 2px 15px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
            border: 2px solid #27ae60;
        }
        
        th, td {
            padding: 15px;
            text-align: left;
            border: 1px solid #a3d9b1;
            color: #2c3e50;
        }
        
        th {
            background-color: #27ae60;
            color: white;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background-color: #f0faf4;
        }
        
        tr:hover {
            background-color: #e8f5ee;
        }
        
        caption {
            font-size: 1.4em;
            font-weight: bold;
            margin-bottom: 15px;
            text-align: left;
            color: #1a472a;
            background-color: #d4f7df;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #27ae60;
        }
        
        hr {
            border: none;
            height: 3px;
            background: linear-gradient(to right, #27ae60, #a3d9b1);
            margin: 30px 0;
            border-radius: 2px;
        }
        
        .instructions {
            color: #34495e;
            font-style: italic;
            margin-top: -5px;
            margin-bottom: 20px;
            padding: 8px;
            background-color: #f0faf4;
            border-radius: 4px;
            border-left: 4px solid #27ae60;
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #1a472a;
            background-color: #d4f7df;
            border-radius: 8px;
            border: 1px solid #a3d9b1;
        }
        
        /* Make text more visible overall */
        h1 {
            font-size: 2.5em;
            text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
        }
        
        h2 {
            font-size: 1.8em;
            margin-top: 25px;
        }
        
        /* Style for the select dropdown */
        select {
            background-color: white;
            color: #2c3e50;
            font-weight: 500;
        }
        
        /* Style for checkboxes and radio buttons labels */
        .checkbox-item label,
        [type="radio"] + label {
            color: #2c3e50;
            font-weight: 500;
        }
        
        /* Highlight required fields more */
        label:has(+ input:required)::after,
        label:has(+ select:required)::after {
            content: " *";
            color: #e74c3c;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <header>
        <h1>Pizza Ordering Form</h1>
    </header>

    <main>
        <form id="pizzaForm" action="#" method="post" novalidate>
            <fieldset>
                <legend>Contact Information</legend>
                <div>
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your full name">
                </div>
                <div>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required placeholder="Enter your phone number">
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required placeholder="Enter your email address">
                </div>
            </fieldset>

            <hr>

            <fieldset>
                <legend>Select Pizza Size</legend>
                <label for="size">Pizza Size:</label>
                <select id="size" name="size" required>
                    <option value="" selected disabled>Select Size--</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">XLarge</option>
                </select>
            </fieldset>

            <fieldset>
                <legend>Select Sauce</legend>
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
            </fieldset>

            <fieldset>
                <legend>Select Toppings</legend>
                <p class="instructions">Choose as many as you like:</p>
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
                <textarea id="instructions" name="instructions" rows="4" placeholder="Add any special instructions here..."></textarea>
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
                        <td>CD Projekt Red</td>
                        <td>The Witcher 3: Wild Hunt</td>
                        <td>2015</td>
                        <td>Role-Playing</td>
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
                        <td colspan="4" style="text-align: center; font-weight: bold; background-color: #d4f7df;">Count: 5</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2023 Pizza Ordering Form. All rights reserved.</p>
    </footer>

    <script>
        document.getElementById('pizzaForm').addEventListener('submit', function(event) {
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const size = document.getElementById('size').value;
            const sauceSelected = document.querySelector('input[name="sauce"]:checked');
            
            if (!name || !phone || !email || !size || !sauceSelected) {
                alert('Please fill out all required fields: Name, Phone, Email, Pizza Size, and Sauce Type.');
                event.preventDefault();
            } else {
                alert('Order submitted successfully! Thank you for your order.');
                // In a real application, you would submit the form to a server here
                // For demo purposes, we'll just show the alert
                event.preventDefault();
            }
        });
    </script>
</body>
</html>
