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
    //add comments
    server.post('/api/comment/add/:id', (req, res) => {
        db.comment.create(req.body.comment).then((result) => {
            db.comment.findAll({
                where: {
                    itemId: req.params.id
                }
            }).then((dbComments) => {
                res.json(dbComments);
            });
        });
    });
    //get comments
    server.get('/api/comments/all/:id', (req, res) => {
        db.comment.findAll({
            where: {
                itemId: req.params.id
            }
        }).then((dbComments) => {
            res.json(dbComments);
        });
    });
};