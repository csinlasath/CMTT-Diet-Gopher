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
    //add eaten food to user id
    server.post('/api/plan/add/:userId', (req, res) => {
        db.plan.create({
            itemId: req.body.itemId,
            userId: req.params.userId,
            date: req.body.date,
            meal: req.body.meal,
            type: req.body.type,
            image: req.body.image,
            title: req.body.title
        }).then((dbFood) => {
            res.status(204);
            return res.json(dbFood);
        });
        console.log("Food was added");
    });
    //delete eaten food by food id
    server.delete('/api/plan/delete/:id', (req, res) => {
        db.plan.destroy({
            where: {
                id: req.params.id
            }
        }).then((dbFood) => {
            return res.json(dbFood);
        });
    });
    //edit a food item by food id
    server.put('/api/plan/update/:id', (req, res) => {
        db.plan.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then((dbFood) => {
            return res.json(dbFood);
        });
    });
};
