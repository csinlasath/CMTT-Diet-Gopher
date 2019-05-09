const fetch = require('isomorphic-unfetch');
require('dotenv').config();
const devEnv = process.env.NODE_ENV !== 'production';
const localServer = devEnv ? 'http://localhost:3000' : 'https://cmtt-diet-gopher.herokuapp.com/';

const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const userMongoRoutes = require('./controllers/mongodb/usersController');
const recipeMongoRoutes = require('./controllers/mongodb/recipesController');
const menuMongoRoutes = require('./controllers/mongodb/menuController');
const groceryMongoRoutes = require('./controllers/mongodb/groceryController');



app.prepare().then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;

  const passport = require('passport');
  const bodyParser = require('body-parser');
  const User = require('./models/mongodb/user');
  const LocalStrategy = require('passport-local');
  const passportLocalMongoose = require('passport-local-mongoose');
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(require('express-session')({
    secret: 'Love You 3000!',
    resave: false,
    saveUninitialized: false
  }));
  server.use(passport.initialize());
  server.use(passport.session());
  passport.use(new LocalStrategy(User.authenticate()));
  passport.serializeUser(User.serializeUser());
  passport.deserializeUser(User.deserializeUser());

  const isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect('/login');
  }

  //Protected Routes
  server.get('/testpage', isLoggedIn, (req, res) => {
    console.log("Accessed /Test page.");
    return handle(req, res);
  });

  server.get('/user', isLoggedIn, (req, res) => {
    console.log("Accessed /User page.");
    return handle(req, res);
  });

  server.get('/useredit', isLoggedIn, (req, res) => {
    console.log("Accessed /User page.");
    return handle(req, res);
  });

  server.get('/user', isLoggedIn, (req, res) => {
    console.log("Accessed /User page.");
    return handle(req, res);
  });

  server.get('/plan', isLoggedIn, (req, res) => {
    console.log("Accessed /Plan page.");
    return handle(req, res);
  });

  //Server Stuff
  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());
  server.use(express.static('pages'));
  server.use(userMongoRoutes);
  server.use(recipeMongoRoutes);
  server.use(menuMongoRoutes);
  server.use(groceryMongoRoutes);

  require('./routes/apiRoutes')(server);
  require('./routes/foodRoutes')(server);
  require('./routes/recipeRoutes')(server);
  require('./routes/userRoutes')(server);

  server.get('/', (req, res) => {
    console.log(req.session);
    return handle(req, res);
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  let db = require('./models/mysql');

  db.sequelize
    .sync({ force: true })
    .then(() => {
      server.listen(PORT, err => {
        if (err) throw err;
        console.log(`>App is Ready and Listening on http://localhost: ${PORT}`);
      });
    })
    .catch(ex => {
      console.error(ex.stack);
      process.exit(1);
    });
});
