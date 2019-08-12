const express = require('express');
require('dotenv').config();
const path = require('path');
// const methodOverride = require("method-override");
const app = express ();
let PORT = process.env.PORT || 3000

app.use(express.static("public"));
// app.use(methodOverride("_method"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

const routes = require("./controllers/recipe_controllers.js")

app.use(routes);

app.listen(PORT, function(){
    console.log('App listening on PORT: ' + PORT);
})