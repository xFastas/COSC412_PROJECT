// Your Express server file (e.g., server.js)
const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const cors = require('cors');

const app = express();
const port = 3001; // Set your desired port

app.use(cors());

app.get("/getGPT", (req, res) => {
    // Access the 'keyword' parameter from the query string
    const ingredients = req.query.keyword || []; // Replace with your default value or validation logic


    const responseData = { "name": "Caramelized Onion Pasta", "ingredients": [ "2 large onions, thinly sliced", "2 tablespoons olive oil", "1 teaspoon sugar", "1/2 teaspoon salt", "1/4 teaspoon black pepper", "8 ounces pasta", "1/4 cup grated Parmesan cheese", "Fresh parsley, for garnish" ], "steps": [ "Heat olive oil in a large skillet over medium heat.", "Add the sliced onions and cook, stirring occasionally, until caramelized and golden brown, about 20-25 minutes.", "Sprinkle sugar, salt, and black pepper over the onions and continue cooking for another 5 minutes.", "Meanwhile, cook the pasta according to package instructions until al dente. Drain and set aside.", "Add the cooked pasta to the skillet with the caramelized onions and toss to combine.", "Sprinkle grated Parmesan cheese over the pasta and onions and toss again until well coated.", "Serve the caramelized onion pasta hot, garnished with fresh parsley." ] }
    res.json(responseData);
    /*
    // Execute the Java file with parameters
    const javaProcess = exec(`java -cp . OpenAPI.java ${ingredients}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Java file: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }

        const jsonObject = JSON.parse(stdout);
        const generatedText = jsonObject.choices[0].message.content;
        console.log(`Java process output: ${generatedText}`);

        // Set the 'Access-Control-Allow-Origin' header to allow requests from http://localhost:3000
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
        
        console.log(ingredients);
        // Respond with data based on the keyword
        const responseData = {
            name: "Peach Cobbler",
            list: ["Ingredients", "Steps", "Nutrition", generatedText]
        };

        res.json(responseData);

        // Handle Java process exit
        javaProcess.on('exit', (code) => {
            console.log(`Java process exited with code ${code}`);
        });
    
    });
    */
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});