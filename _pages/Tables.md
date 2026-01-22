---
permalink: /Tables/
title: "Tables & Forms"
layout: page
---
<!DOCTYPE html>
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
            background-color: #f9f9f9;
        }
        
        h1, h2 {
            color: #333;
        }
        
        form {
            background-color: white;
            padding: 25px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            margin-bottom: 30px;
        }
        
        fieldset {
            border: 1px solid #ddd;
            border-radius: 5px;
            padding: 20px;
            margin-bottom: 20px;
        }
        
        legend {
            font-weight: bold;
            color: #555;
            padding: 0 10px;
        }
        
        label {
            display: block;
            margin-bottom: 8px;
            color: #444;
        }
        
        input[type="text"],
        input[type="tel"],
        input[type="email"],
        select,
        textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        
        .checkbox-group {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .checkbox-item {
            display: flex;
            align-items: center;
        }
        
        input[type="checkbox"] {
            margin-right: 8px;
        }
        
        button {
            background-color: #e74c3c;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 16px;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        
        button:hover {
            background-color: #c0392b;
        }
        
        .required {
            color: #e74c3c;
        }
        
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 30px;
            background-color: white;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            border-radius: 8px;
            overflow: hidden;
        }
        
        th, td {
            padding: 12px 15px;
            text-align: left;
            border: 1px solid #ddd;
        }
        
        th {
            background-color: #f2f2f2;
            font-weight: bold;
        }
        
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        
        caption {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 10px;
            text-align: left;
            color: #333;
        }
        
        hr {
            border: none;
            height: 1px;
            background-color: #ddd;
            margin: 30px 0;
        }
        
        .instructions {
            color: #666;
            font-style: italic;
            margin-top: -10px;
            margin-bottom: 20px;
            font-size: 0.9em;
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
                    <label for="name">Name: <span class="required">*</span></label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div>
                    <label for="phone">Phone: <span class="required">*</span></label>
                    <input type="tel" id="phone" name="phone" required>
                </div>
                <div>
                    <label for="email">Email: <span class="required">*</span></label>
                    <input type="email" id="email" name="email" required>
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
            </fieldset>

            <fieldset>
                <legend>Select Sauce <span class="required">*</span></legend>
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
                        <td colspan="4">Count: 5</td>
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
            // Form validation is handled by HTML5 required attributes
            // Additional custom validation could be added here if needed
            
            // If we wanted to add custom validation:
            const name = document.getElementById('name').value;
            const phone = document.getElementById('phone').value;
            const email = document.getElementById('email').value;
            const size = document.getElementById('size').value;
            const sauceSelected = document.querySelector('input[name="sauce"]:checked');
            
            if (!name || !phone || !email || !size || !sauceSelected) {
                // HTML5 validation will handle this, but we can add custom messaging
                alert('Please fill out all required fields: Name, Phone, Email, Pizza Size, and Sauce Type.');
                event.preventDefault();
            }
        });
    </script>
</body>
</html>
