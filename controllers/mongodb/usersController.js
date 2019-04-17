const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const MONOGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/diet_gopher_db";
const db = require('../../models/mongodb');
mongoose.connect(MONOGODB_URI, { useNewUrlParser: true});

router.get('/api/users/all', (req, res) => {
    db.User.find({}).then((dbUsers) => {
        res.json(dbUsers);
    }).catch((err) => {
        console.error(err);
    });
});

module.exports = router;