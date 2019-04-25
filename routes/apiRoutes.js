const db = require('../models/mysql');
const unirest = require('unirest');
const key = "8c68a1cfd3msh3017b321c5ca61ep11bf0ajsn1060d25710b1";

module.exports = function (server) {
    //search for recipes
    server.get('/api/recipes', (req, res) => {
        let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/searchComplex?";
        if (res.body.query) {
            let query = req.body.query.replace(" ", "+");
            requestString = requestString + "query=" + query.replace(",", "") + "&";
        };
        if (req.body.cuisine !== "none") {
            requestString = requestString + "cuisine=" + req.body.cuisine + "&";
        };
        if (res.body.vegan) {
            requestString = requestString + "diet=vegan&";
        } else if (res.body.vegetarian) {
            requestString = requestString + "diet=vegetarian&";
        } else if (res.body.ketogenic) {
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
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", API_KEY)
            .end(function (result) {
                if (result.status === 200) {
                    res.json(results.body)
                };
            });
    });
    //get recipe info
    server.get('/api/recipe/:id', (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/" + req.params.id + "/information?includeNutrition=true")
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "8c68a1cfd3msh3017b321c5ca61ep11bf0ajsn1060d25710b1")
            .end(function (result) {
                if (result.status === 200) {
                    res.json(results.body)
                };
            });
    });
    //get menu items by query
    server.get('api/menu/items', (req, res) => {
        let query = req.body.query.replace(" ", "+");
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/search?offset=0&number=5&query=" + query)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "bDUKXL5T1VmshfObtYqMYl31H51Cp1AmK78jsnIMzD1Qf9JpMs")
            .end(function (result) {
                if (result.status === 200) {
                    res.json(results.body)
                };
            });
    });
    //get menu item by id
    server.get('api/menu/items/:id', (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/menuItems/" + req.params.id)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "bDUKXL5T1VmshfObtYqMYl31H51Cp1AmK78jsnIMzD1Qf9JpMs")
            .end(function (result) {
                if (result.status === 200) {
                    res.json(results.body)
                };
            });
    });
    //get grocery items by query
    server.get('api/grocery/items', (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/search?offset=0&number=25&query=" + req.body.query)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "bDUKXL5T1VmshfObtYqMYl31H51Cp1AmK78jsnIMzD1Qf9JpMs")
            .end(function (result) {
                if (result.status === 200) {
                    res.json(results.body)
                };
            });
    });
    //get grocery item by id
    server.get('api/grocery/items/:id', (req, res) => {
        unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/products/" + req.params.id)
            .header("X-RapidAPI-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
            .header("X-RapidAPI-Key", "bDUKXL5T1VmshfObtYqMYl31H51Cp1AmK78jsnIMzD1Qf9JpMs")
            .end(function (result) {
                if (result.status === 200) {
                    res.json(results.body)
                };
            });
    });
};

