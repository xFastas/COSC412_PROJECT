// Your Express server file (e.g., server.js)
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001; // Set your desired port

app.use(cors());

app.get("/getGPT", (req, res) => {
    // Access the 'keyword' parameter from the query string
    const ingredients = req.query.keyword || []; // Replace with your default value or validation logic

    // Set the 'Access-Control-Allow-Origin' header to allow requests from http://localhost:3000
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    
    console.log(ingredients);
    // Respond with data based on the keyword
    const responseData = {
        name: "Peach Cobbler",
        list: ["Ingredients", "Steps", "Nutrition"]
    };

    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});