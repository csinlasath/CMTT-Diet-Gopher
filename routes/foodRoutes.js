const db = require('../models/mysql');

module.exports = function(server) {
    //get all eaten and planned food item info by user ID
    server.get('/api/food/:id', (req, res) => {
        let allFood = [];
        console.log(req.params.id)
        db.food.findAll({
            where: {
                userId: req.params.id
            }
        }).then((dbFood) => {
            allFood = dbFood
            db.plan.findAll({
                where: {
                    userId: req.params.id
                }
            }).then((dbFood) => {
                for (let i = 0; i < dbFood.length; i++) {
                allFood.push(dbFood[i]);
                };
                 return res.json(allFood);
            });
        });
    });
    //add eaten food to user id
    server.post('/api/food/add/:userId', (req, res) => {
        db.food.create({
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