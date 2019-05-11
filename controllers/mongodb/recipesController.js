const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MONOGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diet_gopher_db";
const db = require('../../models/mongodb');
mongoose.connect(MONOGODB_URI, { useNewUrlParser: true});

//adds a recipe
router.route('/api/recipe/add').post((req, res) => {
    console.log("API HIT");
    console.log(req.body);
    db.Recipe.create(req.body.body)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
});
//gets a recipe
router.route('/api/favrecipe/:id').get((req, res) => {
    console.log(req.params.id);
    db.Recipe.findOne({
        id: req.params.id
    }).then(dbRecipe => res.json(dbRecipe))
    .catch(err => res.status(422).json(err));
});
    
module.exports = router;
