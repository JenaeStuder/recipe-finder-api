
module.exports = Requecipe

function Requecipe() {
    
}

const url = 'https://api.spoonacular.com/recipes/complexSearch?';

Requecipe.prototype.createQueryString = function (parameters) {
    return this.createQueryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
}

Requecipe.prototype.formatServingTime = function () {
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
        return newtime
    }
}

Requecipe.prototype.searchRecipes = function (parameters) {
    return this.searchRecipes = function () {
        let buildUrl = url + this.createQueryString(parameters)
        return fetch (buildUrl)
            .then(res => res.json())       
    }
}


 