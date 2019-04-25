const db = require('../models/mysql');

module.exports = function (server) {
    //get food plan by day
    server.get('/api/plan/:day', (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.userId = req.query.user_id;
        };
        db.plan.findAll({
            where: {
                query,
                foodPlanDate: req.params.day
            }
        }).then((dbPlan) => {
            return res.json(dbPlan);
        });
    });
    //get all planned food
    server.get('/api/plan/all', (req, res) => {
        var query = {};
        if (req.query.user_id) {
            query.userId = req.query.user_id;
        };
        db.plan.findAll({
            where: query
        }).then((dbPlan) => {
            return res.json(dbPlan);
        });
    });
    //get planned food by ID
    server.get('/api/plan/:id', (req, res) => {
        db.plan.findOne({
            where: {
                id: req.params.id
            }
        }).then((dbPlan) => {
            return res.json(dbPlan);
        });
    });
};