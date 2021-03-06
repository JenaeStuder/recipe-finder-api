//this requires the dotenv node module so that I am able to have access to my API key without displaying it or pushing it to github.
require('dotenv').config();
//The fetch variable is requiring the node-fetch module that allows me to make API calls.
const fetch = require('node-fetch');
//The key variable is my hidden API Key. The process allows me to access the dotenv file that contains my API Key as the variable ACCESS_KEY
const keys = process.env.ACCESS_KEY;
//The bodyParser requires the body-parser node module that allows me to parse the json as it is returned from the API
var bodyParser = require('body-parser')

var mcache = require('memory-cache');

const Requecipe = require('../../constructor')

//this function allows all the code written inside of it to be exported to the server.js file.

module.exports = (app) => {

    var cache=()=> {
        return(req, res, next)=>{
           
            let key='_express_'+req.originalUrl || req.buildUrl 
            let cachedBody= mcache.get(key)
            if(cachedBody){
                res.send=(cachedBody)
                return
            }else{
                res.sendResponse= res.send
                res.send=(body)=>{
                    mcache.put(key, body * 1000);
                    res.sendResponse(body)
                }
                next()
            }
        }
    }

        //this is telling my code to parse all the json

        app.use(bodyParser.urlencoded({
            extended: false
        }));
        app.use(bodyParser.json())

        //These are the variables where the values from the name attributes on my html form will be stored when a user hits submit.

        let userInput;
        let dietSelection;
        let newOffset;

        //this post route takes the information that is posted from the html form and takes the values of the name attributes and assigns them to the appropriate variables. It then redirects the server to the '/' route.

        app.get('/api/api-routes', function(req, res){
            userInput;
            dietSelection;
        })

        app.post('/api/results', cache(2), function (req, res) {
           newOffset= req.body.newOffset
           userInput;
           dietSelection;

            console.log('submit results: ' + dietSelection)
            console.log('user input: ' + userInput)
            console.log('new offset: ' +  newOffset)
            res.redirect('/')

        })

        //The GET route takes the variables created above and applies them to create the API call.

        app.get('/api/results', function (req, res) {
            //   newOffset= req.query.newOffset;

                function recipes() {
                    
                    //    const requecipe = new Requecipe()
                    //variable containing the spoonacular API endpoint I am using for my API call.

                    const url = 'https://api.spoonacular.com/recipes/complexSearch?';

                    //object created to contain the parameters that I want to pass through my API call. This is where the values of the form will be placed via their variables.

                    let parameters = {
                        query: userInput,
                        number: 2,
                        diet: dietSelection,
                        addRecipeInformation: true,
                        offset: newOffSet,
                        apiKey: keys
                    };

                    //The queryString variable takes the parameters object and it's key/value pairs and maps over them. As it passes between each key and it's value it adds an '=' between them and then it joins each of the key/value pairs together with an '&'. This creates a properly formatted queryString we need to add onto the Spoonacular API url to properly call everything we would like to display. 

                    const queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
                    console.log(queryString)

                    //the buildUrl variable is simply concatinating the value of the url variable and the value of the queryString variable to create one variable that contains the entire url with all the endpoints we want to pass through the api. I did this because it's easier to pass a single variable through the fetch api call than concatinating it inside the API call.

                    let buildUrl = url + queryString;
                    console.log("build url = " + buildUrl);

                    //This is the part of our function that calls the api. By using the fetch call I take my buildUrl variable and pass it off to the Spoonacular API.  

                    if(req.params.query == buildUrl){
                        res.json(buildUrl)
                    }else{

                    return fetch(buildUrl)
                        //This takes the response objects from the API and converts them to JSON.
                        .then(response => response.json())
                        // .then(response => {
                                // res.json(response)
                                // console.log(response)
                                    //  requecipe.searchRecipes(parameters)
                                    //This takes the response objects from the API and converts them to JSON.
                                    .then(response => {
                                        res.json(response)
                                        console.log(response)

                                        // if there is an error in my buildUrl or in the response returned from the Spoonacular API this will prevent the code from executing any further and will route the user to an error page.
                                    }).catch(err => {
                                        res.redirect('/error')
                                    })
                                    
                            // })
                        }
                    }
                    recipes()
                   cache(20)
                    // console.log(cachedBody)
                
            })
                // app.get('/', cache(10),(req, res)=>{
                //     setTimeout(()=>{
                //         res.render('query', 5000)
                //     })
                // })
               

        }