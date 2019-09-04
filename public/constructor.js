function Requecipe() {
    const keys = ('../process.env.ACCESS_KEY');

    console.log('api key on front end:'+ keys)

    const url = 'https://api.spoonacular.com/recipes/complexSearch?';

    const query = Requecipe.prototype.createQueryString = function (parameters) {
        parameters = {
            query: userInput,
            number: 12,
            diet: dietSelection,
            addRecipeInformation: true,
            offset: offSet,
            apiKey: keys
        }

        return this.createQueryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');

    }
    const formattedTime = Requecipe.prototype.formatServingTime = function () {
        return this.formatServingTime = function () {
            let totalMinutes = readyIn;
            let hours = Math.floor(totalMinutes / 60);
            let minutes = totalMinutes % 60;
            let newtime;
            if (!hours) {
                newtime = `${minutes}m`
            } else {
                newtime = `${hours}h ${minutes}m`
            }

        }
    }

    const search = Requecipe.prototype.searchRecipes = function () {
        return this.searchRecipes = function () {
            async function apiCall() {
                await fetch('/api/api-routes')
                    .then(async res => res.json())
                    .then(await
                        function (response) {
                        })
        }
    }
}
}
const requecipe = new Requecipe()