const db = require('../models/mysql');
const unirest = require('unirest');
const key = "8c68a1cfd3msh3017b321c5ca61ep11bf0ajsn1060d25710b1";

module.exports = function (server) {
    server.get('/api/recipes', (req, res) => {
        let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?";
        if (res.body.query) {
            let query = req.body.query.replace(" ","+");
            requestString = requestString + "query=" + query.replace(",", "") + "&";
        };
        if (req.body.cuisine !== "none") {
            requestString = requestString + "cuisine=" + req.body.cuisine + "&";
        };
        if (res.body.vegan) {
            requestString = requestString + "diet=vegan&";
        }else if (res.body.vegetarian) {
            requestString = requestString + "diet=vegetarian&";
        }else if (res.body.ketogenic) {
            requestString = requestString + "diet=ketogenic&";
        };
        if (req.body.ingredients) {
            let ingredients = req.body.ingredients.replace(" ", "%2C+");
            requestString = requestString + "includeIngredients=" + ingredients.replace(",", "") + "&";
        };
        if (req.body.excludeIngredients) {
            let ingredients = req.body.excludeIngredients.replace(" ", "%2C+");
            requestString = requestString + "excludeIngredients=" + ingredients + "&";
        };
        if (res.body.intolerances) {
            let intolerances = req.body.excludeIngredients.replace(" ", "%2C+");
            requestString = requestString + "intolerances=" + intolerances + "&";
        };
        if (res.body.type) {
            requestString = requestString + "type=" + req.body.type + "&"
        };
        requestString = requestString + "limitLicense=false&offset=0&number=20";
        unirest.get(requestString)
        .header("X-RapidAPI-Key", API_KEY)
        .end(function (result) {
            if (result.status === 200) {
            getRecipeData(result.body);
            res.json(results.body)
            };
        });
    });
};

