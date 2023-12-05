**Food You Choose**

Group Members:
- Graeme Dickerson-Southworth
- Xavier Jackson`
- Katherine Tan
- Naya Moore

**Overview**

This repository serves as to house the group code for our COSC 412 Group Project, where we aim to create a web application to help users find recipes for dishes using ingredients already found within their home.
Users will have a pre-defined variety of common household ingredients in which they can choose from. After selecting ingredients, code will be sent to chatGPT's api to dynamically produce unique recipes for the user.

**System Requirements**

This application runs using NodeJs and will be hosted as a web server that users can log in and create an account with. Please ensure you have NodeJS installed on your computer (or follow the instructions below to install it) along with MySQL Workbench and Server. 

MySQL Workbench: https://dev.mysql.com/downloads/workbench/
MySQL Server(Community Edition):https://dev.mysql.com/downloads/mysql/
NodeJS: https://nodejs.org/en/download 

**Installation/Run Guide For NodeJS**
This code uses NodeJs and is required in order to run (in the current state). Please follow the following steps to ensure NodeJS is installed:

1. Check if your computer already has nodeJs by running npm -v. If so, you can skip steps 2 and 3
2. Please go to nodejs.org and install the correct NodeJs version for your OS.
3. Ensure you have added NodeJs to path by running node -v and npm -v in your terminal.

Our front-end uses NodeJS React package on port 3000 while our backend uses Express on Port 5000. 
To run our Front-end:
4. cd into the client folder
5. run npm install to install all of the dependencies (if that doesnt work npm install package.json)
6. run npm start to spin up the front end. The code should open up a webpage automatically with your default browser. If not, open your favorite browser and connect to localhost:3000

To run our Back-end:
4. cd into the server folder
5. run npm install to install all of the dependencies (if that doesnt work npm install package.json)
6. run npm start to spin up the front end. The code should open up a webpage automatically with your default browser. If not, open your favorite browser and connect to localhost:3001

If you come across any errors when running npm start, 9 times out of 10 its a dependancy issue. If the error states it cannot find a certain dependancy, run npm install [depencency name] to install it.

**Installation/Run Guide For MySQL**
This code uses a MySQL database to create connections.
1. Open up MySQL Server and Create a new server. 
2. Open Up MySQL Workbench and add a new SQL Connection (Make sure to use the host/port for your MySQL Server you just created)
3. Click the server Tab and click import. Then, use the MySQL file provided to generate our custom database.
4. Inside The project code, cd into server.js and make your way to dbConfig (Line 13). Replace with your database information

If you have any issues, follow these guides:
MySQL Server Installation https://www.youtube.com/watch?v=u96rVINbAUI
Import Database: https://www.youtube.com/watch?v=7Cbm5vPQvNI

**ChatGPTAPI Installation**
This code also uses a ChatGPT API key. The API key will be provided with the rest of the funds with the project submission. But if you happen to run out, follow this guide:
 https://www.youtube.com/watch?v=EIYapGbNRwk

Once you have an API key with funds, open OpenAPI.java and place your API key inside the apiKey Variable.


**Local Account**
If you have any issues logging in or generating recipes from ChatGPT, feel free to use this account
Username: root
Password: TU440

This is a demo account that displays a static recipe, great for Debugging/Demonstrations.