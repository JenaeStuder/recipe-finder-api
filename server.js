//This is where I build my express server. I also am requiring many of the node modules that I will be needing in my app here.

//The express variable requires the node package for Express so that I can create an Express server.
const express = require('express');
//This requires the dotenv node package so that I am able to use a .env file to hide my API key from the front end and also allow it to not be committed to my github. If you have cloned this repo you will need to create your own .env file. Instructions are in the README.
require('dotenv').config();
//The path variable requires and contains the Path node module which allows you to access all the executables available to npm scripts, without booting up all of the npm(1)
const path = require('path');
//The fs variable requires and contains the File System module. This allows you to work with the file system on your computer.
const fs = require('fs');
//The app variable will be used from now on to call all the express instances we need.
const app = express ();
//The PORT variable is created from the server searching for the 3000 port, if this is unavailable it'll choose another open port instead of sending an error.
let PORT = process.env.PORT || 3000
//The fetch variable requires the node-fetch module that is needed to create API calls in the routes/api/api-routes.js
const fetch = require('node-fetch');

// used to render all static files
app.use(express.static("public"));
app.use(express.static("materialize-src"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//This require is requiring all the modules in the routes folder. It will find the index.js file and grab all the routes gathered there.

require('./routes')(app)

//This GET route gets everything that is being sent to the index.html and renders it there.

app.get('/', async function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

//This is where the local machine picks a port and serves up the content within the app.

app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});