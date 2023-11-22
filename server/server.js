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


    // Execute the Java file with parameters
    const javaProcess = exec(`java -cp . OpenAPI.java ${ingredients}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Java file: ${error.message}`);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log(`Java process output: ${stdout}`);
    });
    

    // Set the 'Access-Control-Allow-Origin' header to allow requests from http://localhost:3000
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    console.log(ingredients);
    // Respond with data based on the keyword
    const responseData = {
        name: "Peach Cobbler",
        list: ["Ingredients", "Steps", "Nutrition"]
    };

    res.json(responseData);

    // Handle Java process exit
    javaProcess.on('exit', (code) => {
        console.log(`Java process exited with code ${code}`);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});