
// const favoriteData = require('../data/favorites');

module.exports = (app) => {

app.get("/api/favorite-routes", function(req, res){
    res.json(favoriteData)

})
app.post('/api/favorite-routes', function(req, res){
    favoriteData.push(req.body);
    res.json();
})

}