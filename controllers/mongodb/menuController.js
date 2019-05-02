const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MONOGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diet_gopher_db";
const db = require('../../models/mongodb');
mongoose.connect(MONOGODB_URI, { useNewUrlParser: true});

//adds a menu item
router.route('/api/menu/add').post((req, res) => {
    db.MenuItem.create(req.body.bodyMenu)
      .then(dbRecipe => res.json(dbRecipe))
      .catch(err => res.status(422).json(err));
});
    
module.exports = router;