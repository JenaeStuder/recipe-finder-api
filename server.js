const express = require('express');
require('dotenv').config();
const path = require('path');
const fs = require('fs');
const app = express ();
let PORT = process.env.PORT || 3000
const fetch = require('node-fetch');

// used to render all static files
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes')(app)

app.get('/', async function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
});