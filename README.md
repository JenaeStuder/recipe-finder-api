# recipe-finder-api

# A recipe finding app using the Spoonacular API! You can search any ingredient and popular diets and it will pull up recipes that match your search!

## This was created using the following:
### Vanilla Javascript
### The Fetch API method
### ExpressJS Server
### Nodejs
### The Materialize CSS Library
### The Spoonacular API
### HTML5
### CSS
### jQuery (for the Materialize components to work properly)

## Systems needed to run this app:
### Nodejs

## Instructions for install: 
### If you cloned this repository you will need to do the following before you can get started searching for recipes. 
### Head over to https://spoonacular.com/ and sign up to get your very own API Key!
### At the root of your project directory create a .env file. Within your .env file add the following: ACCESS_KEY=Paste-Your-Api-Key-Here 
### Be sure to copy and paste your personal API Key after the = sign where it says "Paste-Your-Api-Key-Here" and be careful that you don't include any spaces or punctuation before or after.
### In the terminal, at the root of your project, run 'npm i' to install all the dependencies and to get your package.json and package-lock.json files. Once this is complete you should have everything you need to get started searching for recipes.
 ### Don't forget to head over to your .gitignore file and add the .env file to it so your personal API Key won't be committed to Github.

 ## Instructions for use:
 ### Use the app as it's already built by typing in ingredients in the search bar and picking a diet from the select.
 ### If you would like to change the API endpoints, keys being passed through or the amount of items that the API calls at a time head into the routes/api/api-routes.js file. This is where you will find the Spoonacular url and endpoint, the fetch function that calls the API, along with the parameters object that will allow you to add or change any of the key values to match your desired search criteria.


 ##### The gradients on the cards along with the alternating CSS styling for them was inspired by the styling of the cards in this tutorial https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/
