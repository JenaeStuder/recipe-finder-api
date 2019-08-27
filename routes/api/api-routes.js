require('dotenv').config();
const express = require('express')
const fetch = require('node-fetch');
const keys = process.env.ACCESS_KEY;
var bodyParser = require('body-parser')

module.exports = (app) => {

    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json())

    let userInput;
    let dietSelection;

    app.post('/api/api-routes', function (req, res) {

        userInput = req.body.userInput;
        dietSelection = req.body.dietSelection;

         console.log('submit results: ' + dietSelection)
         console.log('user input: ' + userInput)
        res.redirect('/')

    })

    app.get('/api/api-routes', function (req, res) {

        function recipes() {

            const url = 'https://api.spoonacular.com/recipes/search?';

            let parameters = {
                query: userInput,
                number: 6,
                apiKey: keys,
                diet: dietSelection   
            };
            const queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
             console.log(queryString)

            let buildUrl = url + queryString;
             console.log("build url = " + buildUrl);
            return fetch(buildUrl)
                .then(response => response.json())
                .then(response => {
                    res.json(response)
                    // console.log('response: ' + response)
                    // .then(function (req, res){
                    //     // res.send(response)

                }).catch(err => {
                    res.redirect('/error')
                })
        }
        recipes()

    })
}