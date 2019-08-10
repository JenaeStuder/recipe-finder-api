require('dotenv').config();
var fetch = require('node-fetch');
const keys = require('./keys.js'); 
const card = document.getElementById('recipe');
const apiKey = new spoonacular(keys.spoonacular);
const requecipe = new Requecipe();


function Requecipe() {
    const url = 'https://api.spoonacular.com/recipes/search';
    parameters = {
        query: '<string>',
        title: '<string>',
        count: 12,
        readyInMinutes: '<number>',
        image: '<binary>',
        apiKey: '?api_key=' + apiKey
    };
    this.createQueryString();
    this.formatServingTime();
    this.searchRecipes();
     
   const query = requecipe.createQueryString = function (parameters) {
        let queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
       return queryString;
    }
    // console.log(query);

    const formattedTime = requecipe.formatServingTime = function (time) {
        let totalMinutes = results.readyInMinutes;
        let hours = Math.floor(totalMinutes / 60);
        let minutes = totalMinutes % 60;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        time = hours + 'h ' + minutes + 'min ';
        return time;
    }
    console.log(formattedTime)

   const search = requecipe.searchRecipes = function(parameters){
       const buildUrl = url + query;
        // fetch(buildUrl)
        // .then (results => results.json())
        // .then(data => console.log(JSON.stringify(data)))
        console.log(buildUrl)
    }
    
//         .then(function (data) {
//             let recipes = data.results;
//             return recipes.map(function () {
//                 let span = createCard('span');
//                 let img = createCard('img');
//                 let p = createCard('p');
//                 img.src = results.image;
//                 span.innerHTML = `${results.title}``${results.readyInMinutes}`;
//                 append(card, img);
//                 append(card, span);
//                 append(card, p)

//                 document.getElementById('recipe').innerHTML = recipes;
//                 console.log(JSON.stringify(data))
//             })
//         }).catch(error => results.send(error));

//     // })
//     // requecipe.searchRecipes = function(parameters)
//     // .then(function(data){

//     // })

//     function postData(event){
//         event.preventDefault();
//         let title = document.getElementById('title').value;
//         let body = document.getElementById('body').value;
//         let image = document.getElementById('image').value;

//         // title || body || image ===''?

//         fetch('https://api.spoonacular.com/recipes/query?' + 'apiKey',{
//             method: 'POST',
//             headers : new Headers(),
//             body:JSON.stringify({title: title, body:body, image:image})
//         }).then ((results)=>results.json())
//         .then((data)=> console.log(data))
//         .catch ((err)=>console.log(err))
//     }
//     function createCard(element) {
//         return document.createElement(element);
//     }
    
//     function append(parent, el) {
//         return parent.appendChild(el);
//     }
//     document.getElementById('searchRecipe').addEventListener('click', requecipe);
// }



// function search(){

// }