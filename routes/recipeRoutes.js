const db = require('../models/mysql');
//these also work for grocery and menu
module.exports = function (server) {
    //get all favorited recipes
    server.get('/api/favorited/:id', (req, res) => {
        db.favorited.findAll({
            where: {
                userID: req.params.id
            }
        }).then((dbFavorites) => {
            res.json(dbFavorites);
        });
    });
    //add favorite recipe
    server.post('/api/add/favorite', (req, res) => {
        db.favorited.create(req.body.toFavorite).then((result) => {
            res.json(result)
        })
    });
    //delete favorite recipe
    server.post('/api/delete/favorite', (req, res) => {
        db.favorited.destroy({
            where: req.body.toFavorite
        }).then((result) => {
            res.json(result)
        })
    });
};