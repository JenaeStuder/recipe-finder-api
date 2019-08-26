require('dotenv').config();
const express= require('express')
const fetch = require('node-fetch');
const keys = process.env.ACCESS_KEY;
var bodyParser = require('body-parser')


module.exports = (app) => {


    let userInput;
    let dietSelection;

    app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/api-routes', function (req, res) {
        userInput = req.query.userInput;
        dietSelection = req.query.dietSelection;
        
        console.log('submit results: ' + dietSelection)
        console.log('user input: ' + userInput)
        res.redirect('/')
        console.log( req.query.query)
    

    // app.post('/api/api-routes', function(req, res){
        
     })

     app.post('/api/api-routes', function (req, res) {

        function recipes() {

            const url = 'https://api.spoonacular.com/recipes/search?';

            let parameters = {
                query: userInput,
                number: 6,
                // diet: dietSelection,
                apiKey: keys
            };
            const queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
            console.log(queryString)

            let buildUrl = url + queryString;
            console.log("build url = " + buildUrl);
            return fetch(buildUrl)
                .then(response => response.json())
                .then(response => {
                    res.json(response) 
                }).catch(err => {
                    res.redirect('/error')
                })
        }
              recipes()
            })
    }


