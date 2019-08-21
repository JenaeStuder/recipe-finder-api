// import { spawn } from "child_process";

// const fetch = require("node-fetch");

document.addEventListener("DOMContentLoaded", function (event) {
    event.preventDefault()

    function submit() {
        document.getElementById('form').addEventListener("submit", function () {})
    };
    submit()

    function apiCall() {
        fetch('/api/api-routes')
            .then(res => res.json())
            .then(function (response) {

                let recipeResults = response.results
                let results = [];

                // let imageType = function () {

                //     let imagetype = recipeResults.results.image;

                //     console.log('image type results=' + imagetype)

                //     for (let d = 0; d < imagetype; d++){

                //         let imageTypeResults;

                //     switch (new imageType.getType()) {
                //         case 0:
                //             imageTypeResults = '.png';
                //             break;
                //         case 1:
                //             imageTypeResults = '.jpg';
                //             break;
                //         case 2:
                //             imageTypeResults = '.jpeg';
                //             break;
                //         case 3:
                //             imageTypeResults = '.gif';
                //             break;
                //         case 4:
                //             imageTypeResults = '.psd';
                //             break;
                //             default: 
                //             imageTypeResults = '.jpg'
                //     }
                //     imagetype.endsWith(imageTypeResults)}
                //      console.log('image type: '+ imageType)
                // return
                // }

                for (let i = 0; i < recipeResults.length; i++) {
                    results.push(recipeResults[i]);
                    let title = recipeResults[i].title;
                    let image = 'https://spoonacular.com/recipeImages/' + recipeResults[i].id + '-240x150.jpg';
                    let servings = recipeResults[i].servings;
                    let readyIn = recipeResults[i].readyInMinutes

                    let servingTime = function (totalMinutes, hours, minutes, time) {
                        totalMinutes = readyIn;
                        hours = Math.floor(totalMinutes / 60);
                        minutes = totalMinutes % 60;
                        hours = hours < 10 ? '0' + hours : hours;
                        minutes = minutes < 10 ? '0' + minutes : minutes;
                        time = hours + 'h ' + minutes + 'min ';
                        return time;
                    }()

                    console.log("Title: " + title);
                    console.log("Ready In: " + servingTime);
                    console.log("Picture: " + image);
                    console.log("Servings: " + servings);

                    results.push(createCard(recipeResults[i]));

                    function createCard() {

                        let row= document.createElement('div')
                        row.setAttribute('class', 'row')

                        let card = document.createElement('div')
                        card.setAttribute('class', 'card')

                        let cardImageDiv = document.createElement('div')
                        cardImageDiv.setAttribute('class', 'card-img waves-effect waves-block waves-light')
                        let cardImage = '<img class="image activator" src="' + image + '">'
                        cardImageDiv.innerHTML = cardImage

                        let cardContentDiv = document.createElement('div')
                        cardContentDiv.setAttribute('class', 'card-content')
                        let cardContent = '<div><span class="card-title activator text-darken-4">' + title + '</span><p>Total Time: ' + servingTime + '</p><p> Servings: ' + servings + '</p></div>'
                        cardContentDiv.innerHTML = cardContent

                        let cardRevealDiv = document.createElement('div')
                        cardRevealDiv.setAttribute('class', 'card-reveal')
                        let cardReveal = '<div><span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span><p>Here is some more information about this product that is only revealed once clicked on.</p></div>'
                        cardRevealDiv.innerHTML = cardReveal


                    //   document.getElementById('cardContainer').prepend(row)
                        document.getElementById('cardContainer').append(card)
                        // row.appendChild(card)
                        card.appendChild(cardImageDiv)
                        card.appendChild(cardContentDiv)
                        card.appendChild(cardRevealDiv)

                        return;
                    }
                }
            })
        // .catch(function (err) {
        //     console.log('Fetch Error' + err);
        // })

    }
    apiCall()
})
// })










// var fetch = require('node-fetch');
// const keys = require('./keys.js'); 
// const card = document.getElementById('recipe');
// const apiKey = (keys.spoonacular);
// const requecipe = new Requecipe();

// let parameters = {
//     query: userInput,
//     number: 2,
//     apiKey: 'apiKey=' + apiKey
// };
// const userInput = document.getElementById("userInput").value;
// const queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');   
//     console.log(queryString)
// let userInput;

// const servingTime = function time (time) {
//         let totalMinutes = (`${response.results.readyInMinutes}`);
//         let hours = Math.floor(totalMinutes / 60);
//         let minutes = totalMinutes % 60;
//         hours = hours < 10 ? '0' + hours : hours;
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         time = hours + 'h ' + minutes + 'min ';
//         return time;
//         }

// function apiCall(){

//     let buildUrl = url + queryString;
//     console.log("build url = " + buildUrl);
//     fetch(buildUrl).then(
//         function (response) {
//             if(response.status !== 200){
//                 console.log(" there was a problem. Status Code:" + response.status)
//                 return;
//             }
//             response.json().then(function (response){

//                 for(let i = 0; i < response.results.length; i++){
//                     console.log("Title: " + response.results[0].title);
//                     console.log("Ready In: " + servingTime);
//                     console.log("Picture: " + response.results[0].image);
//                     console.log("Servings: " + response.results[0].servings);
//                     console.log('And');
//                     console.log("Title: " + response.results[1].title);
//                     console.log("Ready In: " + servingTime);
//                     console.log("Picture: " + response.results[1].image);
//                     console.log("Servings: " + response.results[1].servings);
//                     return;
//                      }
//                     });
//                 }
//                 ).catch (function(err){
//                     console.log('Fetch Error'+ err);
//                 })

// }
// apiCall()

// function Requecipe() {
//     const url = 'https://api.spoonacular.com/recipes/search?';
//     parameters = {
//         query: 'pizza',
//         title: '',
//         count: 12,
//         readyInMinutes: '',
//         image: '',
//         apiKey: 'apiKey=' + apiKey
//     };
//     this.createQueryString();
//     this.formatServingTime();
//     this.searchRecipes();

//    const queryAString = requecipe.createQueryString = function (parameters) {
//         let queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
//        return queryString;
//     }
//     // console.log(query);

//     const formattedTime = requecipe.formatServingTime = function (time) {
//         let totalMinutes = parameters.readyInMinutes;
//         let hours = Math.floor(totalMinutes / 60);
//         let minutes = totalMinutes % 60;
//         hours = hours < 10 ? '0' + hours : hours;
//         minutes = minutes < 10 ? '0' + minutes : minutes;
//         time = hours + 'h ' + minutes + 'min ';
//         return time;
//     }
//     console.log(formattedTime)

//    requecipe.searchRecipes = function(parameters){
//        const buildUrl = url + '&' + queryAString;
//         fetch(buildUrl)
//         .then (results => results.json())
//         .then(data => console.log(JSON.stringify(data)))
//         console.log(buildUrl)
//     }

// }

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