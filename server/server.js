// Your Express server file (e.g., server.js)
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3001; // Set your desired port

app.use(cors());

const dbConfig = {
    host: 'localhost', // replace with your database host
    user: 'root', // replace with your database user
    password: 'P@$$w0rd', // replace with your database password
    database: 'cosc440proj' // replace with your database name
};

const pool = mysql.createPool(dbConfig);

app.get("/getGPT", (req, res) => {
    // Access the 'keyword' parameter from the query string
    const ingredients = req.query.keyword || [];


    // Root Account: For Debugging and Demo Purposes Only
    if (ingredients.substr(0,4) === 'root'){
        console.log("We got in here");
        const responseData = '{ "name": "Caramelized Onion Pasta", "ingredients": [ "2 large onions, thinly sliced", "2 tablespoons olive oil", "1 teaspoon sugar", "1/2 teaspoon salt", "1/4 teaspoon black pepper", "8 ounces pasta", "1/4 cup grated Parmesan cheese", "Fresh parsley, for garnish" ], "steps": [ "Heat olive oil in a large skillet over medium heat.", "Add the sliced onions and cook, stirring occasionally, until caramelized and golden brown, about 20-25 minutes.", "Sprinkle sugar, salt, and black pepper over the onions and continue cooking for another 5 minutes.", "Meanwhile, cook the pasta according to package instructions until al dente. Drain and set aside.", "Add the cooked pasta to the skillet with the caramelized onions and toss to combine.", "Sprinkle grated Parmesan cheese over the pasta and onions and toss again until well coated.", "Serve the caramelized onion pasta hot, garnished with fresh parsley." ] }'
        res.json(responseData);
    }

    else{

        // Execute the Java file with parameters
        const javaProcess = exec(`java -cp . OpenAPI.java ${ingredients}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Java file: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }

        const jsonObject = JSON.parse(stdout);
        const generatedText = jsonObject.choices[0].message.content;

        // Set the 'Access-Control-Allow-Origin' header to allow requests from http://localhost:3000
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        
        // Respond with data based on the keyword

        res.json(generatedText);

        // Handle Java process exit
        javaProcess.on('exit', (code) => {
            console.log(`Java process exited with code ${code}`);
        });
    
    });

    }    
});

app.get("/deleteRecipe", (req, res) => {
    const username = req.query.username;

    pool.query('DELETE FROM savedrecipes WHERE username = ?', [username], (error, results, fields) => {
        if (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Internal Server Error');
          return;
        }
    
    res.json("Deleted");
    });
});

app.get("/getSavedRecipe", (req, res) => {
    const username = req.query.username;

    console.log(username);

    pool.query('SELECT * FROM savedrecipes WHERE username = ?', [username], (error, results, fields) => {
        if (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Internal Server Error');
          return;
        }
    
    if (results.length == 0) { //No Saved Recipe Found For User
        res.json("Invalid");
    }

    else{
        recipeName = results[0].recipeName;
        console.log(recipeName);
        pool.query('SELECT * FROM recipe WHERE recipeName = ?', [recipeName], (error, results, fields) => {
            if (error) {
              console.error('Error executing query:', error);
              res.status(500).send('Internal Server Error');
              return;
            }
        
        console.log("Returning Results From Server: "+JSON.stringify(results));
        res.json(results);
        
        });
    }

    });

});

app.get("/saveRecipe", (req, res) => {
    const recipeName = req.query.recipeName;
    const ingredients = req.query.ingredients;
    const steps = req.query.steps;
    const username = req.query.username;

    pool.query('SELECT * FROM savedrecipes WHERE username = ?', [username], (error, results, fields) => {
        if (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Internal Server Error');
          return;
        }

    if (results.length == 0){
        pool.query('INSERT INTO savedrecipes (username, recipeName) VALUES (?, ?)', [username, recipeName], (error, results, fields) => {
            if (error) {
                console.error('Error executing query:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
        });

        pool.query('INSERT INTO recipe (recipeName, ingredients, instructions, dietaryRestrictions) VALUES (?, ?, ?, ?)', [recipeName, ingredients.toString(), steps.toString(), "None"], (error, results, fields) => {
            if (error) {
                console.error('Error executing query:', error);
                res.status(500).send('Internal Server Error');
                return;
            }
        });

        res.json("Success");

    }

    else{
        console.log("Recipe Already Saved");
        res.json("Invalid");
    }



    });
});


app.get("/registerCredentials", (req, res) => {

    const username = req.query.username;
    const password = req.query.password;

    // Connect to the MySQL database and execute the query (check if username exists)
    pool.query('SELECT * FROM credentials WHERE username = ?', [username], (error, results, fields) => {
        if (error) {
          console.error('Error executing query:', error);
          res.status(500).send('Internal Server Error');
          return;
        }
    
    if (results.length == 0){
        pool.query('INSERT INTO credentials (username, password) VALUES (?, ?)', [username, password], (error, results, fields) => {
            if (error) {
              console.error('Error executing query:', error);
              res.status(500).send('Internal Server Error');
              return;
            }
            
            res.json(username);
        });
    }

    else{
        console.log("Username already found");
        res.json("Invalid");
    }

    });
});

app.get("/getCredentials", (req, res) => {

    const username = req.query.username;
    const password = req.query.password;

    // Connect to the MySQL database and execute the query
    pool.query('SELECT * FROM credentials WHERE username = ? AND password = ?', [username, password], (error, results, fields) => {
      if (error) {
        console.error('Error executing query:', error);
        res.status(500).send('Internal Server Error');
        return;
      }
  
      // Log the results to the console

      if (results.length == 0){
        // return invalid to client
        res.json("Invalid");
      }

      else {
        // Send the results to the client
        res.json(results);
      }
  
    
    });
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});