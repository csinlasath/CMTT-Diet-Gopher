const db = require('../models/mysql');

module.exports = function (server) {
    //get all recipes
    server.get('/api/recipe/all', (req, res) => {
        db.recipe.findAll({
            where: query
        }).then((dbPlan) => {
            return res.json(dbPlan);
        });
    });
    //get recipe by ID
    server.get('/api/recipe/:id', (req, res) => {
        db.recipe.findOne({
            where: {
                id: req.params.id
            }
        }).then((dbPlan) => {
            return res.json(dbPlan);
        });
    });
    //get recipe by ingredient
    server.get('/api/recipe/:ingr', (req, res) => {
        let query = req.params.ingr.toLowerCase();
        db.recipe.findAll({
            where: {
                foodIngredients: sequelize.where(sequelize.fn('LOWER', sequelize.col('foodIngredients')), 'LIKE', '%' + query + '%')
            }
        }).then((dbRecipe) => {
            return res.json(dbRecipe);
        });
    });
    //get all recipes by calorie range
    server.get('/api/recipe/:calRange', (req, res) => {
        db.recipe.findAll({
            where: {
                calRange: req.params.calRange
            }
        }).then((dbRecipe) => {
            return res.json(dbRecipe);
        });
    });
    //get all recipes by protien range
    server.get('/api/recipe/:proRange', (req, res) => {
        db.recipe.findAll({
            where: {
                proRange: req.params.proRange
            }
        }).then((dbRecipe) => {
            return res.json(dbRecipe);
        });
    });
    //get all favorited recipes
    server.get('/api/favorited', (req, res) => {
        let results = [];
        db.favorited.findAll({
            where: {
                userID: req.body.userID
            }
        }).then((dbFavorites) => {
            for (let i = 0; i < dbFavorites.length; i++) {
                db.recipe.findOne({
                    where: {
                        id: dbFavorites[i].itemID
                    }
                }).then((dbRecipe) => {
                    results.push(dbRecipe);
                });
            };
            return res.json(results);
        });
    });
};