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

This application runs using NodeJs and will be hosted as a web server that users can log in and create an account with. Please ensure you have NodeJS installed on your computer (or follow the instructions below to install it).


**Installation Guide**
This code uses NodeJs and is required in order to run (in the current state). Please follow the following steps to ensure NodeJS is installed:

1. Check if your computer already has nodeJs by running npm -v. If so, you can skip steps 2 and 3
2. Please go to nodejs.org and install the correct NodeJs version for your OS.
3. Ensure you have added NodeJs to path by running node -v and npm -v in your terminal.

Our front-end uses NodeJS React package on port 3000 while our backend uses Express on Port 5000. 
To run our Front-end:
4. cd into the client folder
5. run npm install to install all of the dependencies
6. run npm start to spin up the front end. The code should open up a webpage automatically with your default browser. If not, open your favorite browser and connect to localhost:3000

To run our Back-end (Note, not much is being done with this yet, as the backend is our main focuse for the Third sprint):
4. cd into the server folder
5. run npm install to install all of the dependencies
6. run npm start to spin up the front end. The code should open up a webpage automatically with your default browser. If not, open your favorite browser and connect to localhost:5000

If you come across any errors when running npm start, 9 times out of 10 its a dependancy issue. If the error states it cannot find a certain dependancy, run npm install [depencency name] to install it.
