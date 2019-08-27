document.addEventListener("DOMContentLoaded", function (event) {

    event.preventDefault()

    //async and await function that is fetching the response from the results of the api call in routes/api/api-routes.js

    async function apiCall() {
        await fetch('/api/api-routes')
            .then(async res => res.json())
            .then(await
                function (response) {

                    //takes the results from the spoonacular API and puts them into the recipeResults variable for ease of coding

                    let recipeResults = response.results
                    let results = [];

                    //loop that takes the results and loops over them individually so that all the results are gathered and not just the first one

                    for (let i = 0; i < recipeResults.length; i++) {

                        //pushes each of the results into the empty results array so we can grab them indivdually
                        results.push(recipeResults[i]);

                        // takes the results and puts them into variables for ease of use later on in the code.

                        let title = recipeResults[i].title;
                        let image = 'https://spoonacular.com/recipeImages/' + recipeResults[i].id + '-240x150.jpg';
                        let servings = recipeResults[i].servings;
                        let readyIn = recipeResults[i].readyInMinutes

                        //a variable that contains a function to convert the total minutes into hours and minutes so we can display our data in an hour and minute format.

                        let servingTime = function (totalMinutes, hours, minutes, newtime) {
                            totalMinutes = readyIn;
                            hours = Math.floor(totalMinutes / 60);
                            minutes = totalMinutes % 60;
                            newtime;
                            if (!hours) {
                                newtime = `${minutes}m`
                            } else {
                                newtime = `${hours}h ${minutes}m`
                            }
                            return newtime
                        }()

                        //console logging the results to make sure that everything we receive from the api is being displayed onto the html correctly.

                        console.log("Title: " + title);
                        console.log("Ready In: " + servingTime);
                        console.log("Picture: " + image);
                        console.log("Servings: " + servings);

                        //takes the results array that contains each result and pushes them to the createCard function.
                        results.push(createCard(recipeResults[i]));

                        //createCard function takes the results that have been pushed into it and creates a card for each result to be displayed on the html.

                        function createCard() {

                            //card variable is created as a div that will attach to the parent element on the DOM
                            //with setAttribute I can give each element it's own class and className for ease of styling since these cards will not be written on the html

                            let card = document.createElement('div')
                            card.setAttribute('class', 'card medium')

                            //cardImageDiv refers to the area of the card that will contain the displayed image. The classes used come from the MaterializeCSS library. I am using the component Card Reveal Card

                            let cardImageDiv = document.createElement('div')
                            cardImageDiv.setAttribute('class', 'card-image waves-effect waves-block waves-light')

                            //cardImage refers to the image being displayed. By using innerHTML I am able to nest these elements inside the child above it. I am able to take the variable image from the results array and add it onto the card here.

                            let cardImage = '<img class="image activator" src="' + image + '">'
                            cardImageDiv.innerHTML = cardImage

                            //cardContentDiv refers to the area of the card where the content is being rendered. Just like the cardImage variable above, the cardContent refers to the actual content being rendered inside the card, I am taking the title variable from the results array and putting it here, and by using innerhtml I am able to nest the cardContent inside of the cardContentDiv. I assigned classes to each element, again, by following the classNames from the MaterializeCSS library.

                            let cardContentDiv = document.createElement('div')
                            cardContentDiv.setAttribute('class', 'card-content')
                            let cardContent = '<div><span class="card-title activator text-darken-4">' + title + '</span></div>'
                            cardContentDiv.innerHTML = cardContent

                            //cardRevealDiv refers to the area of the card that is revealed once a user clicks on the picture. When the user clicks, the card reveals the title, serving time and servings all using the variables inside the results array. Just like the elements above I have set the classes on the cardRevealDiv and the cardReveal variables based on the MaterializeCSS library and have nested cardReveal inside the child cardRevealDiv using innerHTML.

                            let cardRevealDiv = document.createElement('div')
                            cardRevealDiv.setAttribute('class', 'card-reveal')
                            let cardReveal = '<div><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>' + title + '</span><p>Total Time: ' + servingTime + '</p><p> Servings: ' + servings + '</p></div>'
                            cardRevealDiv.innerHTML = cardReveal

                            //This appends the child which is my card variable to the parent cardContainer id on the html.
                            document.getElementById('cardContainer').append(card)

                            //These append each of my div variables to the child element which is my variable card

                            card.appendChild(cardImageDiv)
                            card.appendChild(cardContentDiv)
                            card.appendChild(cardRevealDiv)

                            return;
                        }
                    }
                })
                
            //If there are any errors in the function this code catches them and prevents the function from completing and will display an error message in the console.

            .catch(function (err) {
                console.log('Fetch Error' + err);
            })
    }
    //This function controls my submit button on my html page. It takes the content that is part of the id form and when the user hits submit, sends the information to the routes/api/api-routes.js file so the results of the form can be put into the api call.

    function submit() {
        document.getElementById('form').addEventListener("submit", function () {

        })
    }
    submit()
    apiCall()

})