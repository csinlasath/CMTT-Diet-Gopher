const db = require('../models/mysql');

module.exports = function(server) {
    //get all
    server.get('/api/food/all', (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.userId = req.query.user_id;
        };
        db.food.findAll({
            where: query,
        }).then((dbFood) => {
            return res.json(dbFood);
        });
    });
    //get all by day
    server.get('/api/food/all/:day', (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.userId = req.query.user_id;
        };
        db.food.findAll({
            where: {
                foodEatenDate: req.params.day,
                query
            }
        }).then((dbFood) => {
            return res.json(dbFood);
        });       
    });
    //get food item info by ID
    server.get('/api/food/:id', (req, res) => {
        db.food.findOne({
            where: {
                id: req.params.id
            }
        }).then((dbFood) => {
            return res.json(dbFood);
        });
    });
    //add eaten food to user id
    server.post('/api/food/add/:id', (req, res) => {
        db.food.create({
            foodName: req.body.foodName,
            foodType: req.body.foodName,
            foodIngredients: req.body.foodIngredients,
            foodCalories: req.body.foodCalories,
            foodFat: req.body.foodFat,
            foodProtein: req.body.foodProtein,
            foodGluten: req.body.foodGluten,
            foodVeggie: req.body.foodVeggie,
            foodVegan: req.body.foodVegan,
            foodNuts: req.body.foodNuts,
            foodEatenDate: req.body.foodEatenDate,
            calRange: req.body.calRange,
            proRange: rteq.body.proRange,
            notes: req.body.notes
        }).then((dbFood) => {
            res.status(204);
            return res.json(dbFood);
        });
        console.log("Food was added");
    });
    //delete eaten food by food id
    server.delete('/api/food/delete/:id', (req, res) => {
        db.food.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbFood) => {
            return res.json(dbFood);
        });
    });
    //edit a food item by food id
    server.put('/api/food/update/:id', (req, res) => {
        db.food.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((dbFood) => {
            return res.json(dbFood);
        });
    });
};