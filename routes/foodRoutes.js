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
};