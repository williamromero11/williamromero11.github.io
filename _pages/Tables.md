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
            background-color: #f0fff4;
            color: #2c3e50;
        }
        
        h1, h2 {
            color: #1a472a;
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
            color: #1a472a;
            padding: 0 15px;
            font-size: 1.1em;
            background-color: #d4f7df;
            border-radius: 4px;
            border: 1px solid #27ae60;
        }
        
        label {
            display: block;
            margin-bottom: 10px;
            color: #2c3e50;
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
        }
        
        button {
            background-color: #27ae60;
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
            padding: 12px 15px;
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
        
        caption {
            font-size: 1.4em;
            font-weight: bold;
            margin-bottom: 15px;
            text-align: left;
            color: #1a472a;
        }
        
        hr {
            border: none;
            height: 2px;
            background-color: #27ae60;
            margin: 30px 0;
        }
        
        .instructions {
            color: #34495e;
            font-style: italic;
            margin-top: -5px;
            margin-bottom: 20px;
        }
        
        .error {
            color: #e74c3c;
            font-size: 0.9em;
            margin-top: -15px;
            margin-bottom: 15px;
            display: none;
        }
        
        .success {
            background-color: #d4f7df;
            color: #1a472a;
            padding: 15px;
            border-radius: 6px;
            margin-top: 20px;
            border: 2px solid #27ae60;
            display: none;
        }
        
        footer {
            text-align: center;
            margin-top: 40px;
            padding: 20px;
            color: #1a472a;
        }
    </style>
</head>
<body>
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
                    <input type="text" id="name" name="name" required>
                    <div class="error" id="nameError">Please enter your name</div>
                </div>
                <div>
                    <label for="phone">Phone:</label>
                    <input type="tel" id="phone" name="phone" required>
                    <div class="error" id="phoneError">Please enter a valid phone number</div>
                </div>
                <div>
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required>
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
                        <td colspan="4" style="text-align: center; font-weight: bold; background-color: #f0faf4;">Count: 5</td>
                    </tr>
                </tfoot>
            </table>
        </section>
    </main>

    <footer>
        <p>&copy; 2026 William's Pizza Ordering Form. All rights reserved.</p>
    </footer>

    <script>
        document.getElementById('pizzaForm').addEventListener('submit', function(event) {
            // Prevent actual form submission (which causes 405 error on GitHub Pages)
            event.preventDefault();
            
            // Hide all error messages
            const errorElements = document.querySelectorAll('.error');
            errorElements.forEach(error => {
                error.style.display = 'none';
            });
            
            // Hide success message
            document.getElementById('successMessage').style.display = 'none';
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const email = document.getElementById('email').value.trim();
            const size = document.getElementById('size').value;
            const sauceSelected = document.querySelector('input[name="sauce"]:checked');
            
            // Validation flags
            let isValid = true;
            
            // Validate name
            if (!name) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            // Validate phone (basic validation)
            const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
            if (!phone || !phoneRegex.test(phone.replace(/\D/g, ''))) {
                document.getElementById('phoneError').style.display = 'block';
                isValid = false;
            }
            
            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailRegex.test(email)) {
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // Validate size
            if (!size) {
                document.getElementById('sizeError').style.display = 'block';
                isValid = false;
            }
            
            // Validate sauce
            if (!sauceSelected) {
                document.getElementById('sauceError').style.display = 'block';
                isValid = false;
            }
            
            // If all validations pass
            if (isValid) {
                // Show success message
                document.getElementById('successMessage').style.display = 'block';
                
                // Scroll to success message
                document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth' });
                
                // Optional: Log form data (in real app, you'd send to server)
                console.log('Form submitted successfully!');
                console.log('Name:', name);
                console.log('Phone:', phone);
                console.log('Email:', email);
                console.log('Size:', size);
                console.log('Sauce:', sauceSelected.value);
                
                // Get selected toppings
                const selectedToppings = [];
                document.querySelectorAll('input[name="toppings"]:checked').forEach(checkbox => {
                    selectedToppings.push(checkbox.value);
                });
                console.log('Toppings:', selectedToppings);
                console.log('Instructions:', document.getElementById('instructions').value);
                
                // Optional: Reset form after successful submission
                // document.getElementById('pizzaForm').reset();
            }
        });
        
        // Real-time validation for better UX
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
        
        // Hide sauce error when a sauce is selected
        document.querySelectorAll('input[name="sauce"]').forEach(radio => {
            radio.addEventListener('change', function() {
                document.getElementById('sauceError').style.display = 'none';
            });
        });
    </script>
</body>
</html>
