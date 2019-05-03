const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MONOGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diet_gopher_db";
const db = require('../../models/mongodb');
mongoose.connect(MONOGODB_URI, { useNewUrlParser: true});

//adds a grocery item
router.route('/api/grocery/add').post((req, res) => {
    db.GroceryItem.create(req.body.body)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
});
//gets a grocery item
router.route('/api/favGrocery/:id').get((req, res) => {
    console.log(req.params.id);
    db.GroceryItem.findOne({
        id: req.params.id
    }).then(dbGrocery => res.json(dbGrocery))
    .catch(err => res.status(422).json(err));
});
    
module.exports = router;