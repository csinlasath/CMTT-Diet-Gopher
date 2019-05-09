const db = require('../models/mysql');
module.exports = function (server) {

    //Get Search History for Individual User
    server.get('/api/history/:userId/all', (req, res) => {
        db.history.findAll({
            where: {
                userID: req.params.userId
            }
        }).then((dbHistory) => {
            res.json(dbHistory);
        });
    });

    //Add item to Search History
    server.post('/api/history/:userId/:type/add', (req, res) => {
        db.history.create({
            itemId: req.body.itemId,
            userId: req.params.userId,
            type: req.params.type,
            image: req.body.image,
            title: req.body.title,
            restaurantChain: req.body.restaurantChain
        }).then((result) => {
            res.json(result)
        });

    });

    server.post('/api/history/:userId/:type/remove', (req, res) => {
        db.history.destroy({
            where: req.body
        }).then((result) => {
            res.json(result)
        }); s
    });
}