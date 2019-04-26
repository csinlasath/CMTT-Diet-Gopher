const db = require('../models/mysql');
const unirest = require('unirest');
const key = "8c68a1cfd3msh3017b321c5ca61ep11bf0ajsn1060d25710b1";

module.exports = function (server) {
    //search for recipes
    server.post('/api/recipes', (req, res) => {
        console.log(req.body);
        let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?";
        if (req.body.query !== "") {
            let query = req.body.query.replace(" ", "+");
            requestString = requestString + "query=" + query.replace(",", "") + "&";
        };
        if (req.body.cuisine !== "none") {
            requestString = requestString + "cuisine=" + req.body.cuisine + "&";
        };
        if (req.body.diet !== "none") {
            requestString = requestString + "diet=" + req.body.diet + "&";
        };
        if (req.body.ingredients !== "") {
            let ingredients = req.body.ingredients.replace(" ", "%2C+");
            requestString = requestString + "includeIngredients=" + ingredients.replace(",", "") + "&";
        };
        if (req.body.excludeIngredients !== "") {
            let ingredients = req.body.excludeIngredients.replace(" ", "%2C+");
            requestString = requestString + "excludeIngredients=" + ingredients.replace(",", "") + "&";
        };
        if (req.body.intolerances !== "") {
            let intolerances = req.body.intolerances.replace(" ", "%2C+");
            requestString = requestString + "intolerances=" + intolerances.replace(",", "") + "&";
        };
        if (req.body.type !== "none") {
            requestString = requestString + "type=" + req.body.type + "&"
        };
        requestString = requestString + "limitLicense=false&offset=0&number=20";
        console.log(`This is the request string: ${requestString}`)
        unirest.get(requestString)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", key)
            .end(function (result) {
                if (result.status === 200) {
                    res.json(result.body)
                };
            });
    });
    //get recipe info
    server.get('/api/recipe/:id', (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + req.params.id + "/information?includeNutrition=true")
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", key)
            .end(function (result) {
                if (result.status === 200) {
                    res.json(result.body)
                };
            });
    });
    //get menu items by query
    server.post('/api/menu/items', (req, res) => {
        let query = req.body.query.replace(" ", "+");
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search?offset=0&number=5&query=" + query)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", key)
            .end(function (result) {
                if (result.status === 200) {
                    res.json(result.body)
                };
            });
    });
    //get menu item by id
    server.get('/api/menu/items/:id', (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/" + req.params.id)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", key)
            .end(function (result) {
                if (result.status === 200) {
                    res.json(result.body)
                };
            });
    });
    //get grocery items by query
    server.post('/api/grocery/items', (req, res) => {
        console.log(req);
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?offset=0&number=25&query=" + req.body.query)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", key)
            .end(function (result) {
                if (result.status === 200) {
                    res.json(result.body)
                };
            });
    });
    //get grocery item by id
    server.get('/api/grocery/items/:id', (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/" + req.params.id)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", key)
            .end(function (result) {
                if (result.status === 200) {
                    res.json(result.body)
                };
            });
    });
};

