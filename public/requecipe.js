document.addEventListener("DOMContentLoaded", function () {
            
            function submit() {
                document.getElementById('form').addEventListener("submit", function (event) {
                    event.preventDefault()

                     apiCall()
                })
            }
                submit()

               async function apiCall() {
                   await fetch('/api/api-routes')
                        .then( async res => res.json())
                        .then(await function (response) {

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

                                let servingTime = function (totalMinutes, hours, minutes, newtime) {
                                    totalMinutes = readyIn;
                                    hours = Math.floor(totalMinutes / 60);
                                    minutes = totalMinutes % 60;
                                    // hours = hours < 10 ? '0' + hours : hours;
                                    // minutes = minutes < 10 ? '0' + minutes : minutes;
                                    // time = hours + 'h ' + minutes + 'min ';
                                    newtime;
                                    if(!hours){
                                        newtime=`${minutes}m`

                                     } else{
                                            newtime=`${hours}h ${minutes}m`
                                        }
                                        return newtime
                                    }()

                                console.log("Title: " + title);
                                console.log("Ready In: " + servingTime);
                                console.log("Picture: " + image);
                                console.log("Servings: " + servings);

                                results.push(createCard(recipeResults[i]));

                                function createCard() {

                                    let card = document.createElement('div')
                                    card.setAttribute('class', 'card medium')

                                    let cardImageDiv = document.createElement('div')
                                    cardImageDiv.setAttribute('class', 'card-image waves-effect waves-block waves-light')
                                    let cardImage = '<img class="image activator" src="' + image + '">'
                                    cardImageDiv.innerHTML = cardImage

                                    let cardContentDiv = document.createElement('div')
                                    cardContentDiv.setAttribute('class', 'card-content')
                                    let cardContent = '<div><span class="card-title activator text-darken-4">' + title + '</span></div>'
                                    cardContentDiv.innerHTML = cardContent

                                    let cardRevealDiv = document.createElement('div')
                                    cardRevealDiv.setAttribute('class', 'card-reveal')
                                    let cardReveal = '<div><span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>' + title + '</span><p>Total Time: ' + servingTime + '</p><p> Servings: ' + servings + '</p></div>'
                                    cardRevealDiv.innerHTML = cardReveal

                                    document.getElementById('cardContainer').append(card)
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
               
             })
