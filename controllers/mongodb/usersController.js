const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/mongodb/user');
const MONGOODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/diet_gopher_db';
const db = require('../../models/mongodb');
mongoose.connect(MONGOODB_URI, { useNewUrlParser: true });

//AUTH ROUTES
const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

router.post('/signup', (req, res) => {
  User.register(new User({
    username: req.body.username,
    email: req.body.signUpEmail,
    firstName: req.body.signUpFirstName,
    lastName: req.body.signUpLastName
  }), req.body.password, (err, user) => {
    if (err) {
      console.error(err);
      res.redirect('/signup');
    }
    passport.authenticate('local')(req, res, function() {
      console.log(user);
      res.redirect('/');
    });
  });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}), (req, res) => {
  console.log('Logged In');
  console.log(res.user);
});

router.get('/logout', isLoggedIn, (req, res) => {
  req.logOut();
  console.log("User logged out.");
  res.redirect('/');
});

router.get('/api/user/verify', isLoggedIn, (req, res) => {
  console.log("User Data.");
  console.log(req.session);
  let session;
  console.log(req.session.passport.user);
  if (req.session.passport.user === undefined) {
    session = 'Not Signed In';
    res.json(session);
  }
  else {
    session = req.session.passport;
    return res.json(session.user);
  }
});

//Database Routes

//Get All Users in Database
router.get('/api/users/all', (req, res) => {
  db.User.find({}).then((dbUsers) => {
      res.json(dbUsers);
  }).catch((err) => {
      console.error(err);
  });
});

//Get User Info By Username
router.get('/api/finduser/:username', (req, res) => {
  db.User.findOne({ username: req.params.username}).then((dbUser) => {
      res.json(dbUser);
  }).catch((err) => {
      res.json(err);
  });
});

//Get All Favorites for User
router.get('/api/user/:userId/favorite/get/', (req, res) => {
  db.User.findOne({_id: req.params.userId}).then((dbFavorites) => {
      res.json(dbFavorites);
  }).catch((err) => {
      console.error(err)
  });
});

//Add Favorite for User
router.get('/api/user/:userId/favorite/save/:itemId', (req, res) => {
  db.User.findOneAndUpdate({ _id: req.params.userId }, { $push: { favorited: req.params.itemId } }, { new: true }).then(function(dbUser) {
    res.json(dbUser);  
  }).catch((err) => {
      console.error(err);
  });
});

//Remove Favorite for User
router.get('/api/user/:userId/favorite/remove/:itemId', (req, res) => {
  db.User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { favorited: req.params.itemId } }, { new: true }).then(function(dbUser) {
    res.json(dbUser);  
  }).catch((err) => {
      console.error(err);
  });
});

//Remove All Favorites from User
router.get('/api/user/:userId/favorite/remove/all', (req, res) => {
  db.User.findOneAndUpdate({ _id: req.params.userId }, { $set: { favorited: [] } }, { new: true }).then(function(dbUser) {
    res.json(dbUser);  
  }).catch((err) => {
      console.error(err);
  });
});

//Add to User Search History
router.get('/api/user/:userId/favorite/save/:itemId', (req, res) => {
  db.User.findOneAndUpdate({ _id: req.params.userId }, { $push: { searchHistory: req.params.itemId } }, { new: true }).then(function(dbUser) {
    res.json(dbUser);  
  }).catch((err) => {
      console.error(err);
  });
});

module.exports = router;