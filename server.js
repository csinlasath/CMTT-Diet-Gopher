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

app.prepare().then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;

  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());
  server.use(express.static('pages'));
  server.use(userMongoRoutes);
  
  require('./routes/userRoutes')(server);
  require('./routes/foodRoutes')(server);
  require('./routes/recipeRoutes')(server);
  require('./routes/apiRoutes')(server);

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
