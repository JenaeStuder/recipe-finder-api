require('dotenv').config();
const fetch = require('node-fetch');
const keys = process.env.ACCESS_KEY;

module.exports = (app) => {

    let userInput;

    app.post('/api/api-routes', function (req, res) {
        userInput = req.body.userInput;
        res.redirect('/')
        console.log(userInput)
    })

    app.get('/api/api-routes/', function (req, res) {

        function recipes() {

            const url = 'https://api.spoonacular.com/recipes/search?';

            let parameters = {
                query: userInput,
                number: 12,
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
