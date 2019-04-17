var fetch = require('isomorphic-unfetch');
require('dotenv').config();
var devEnv = process.env.NODE_ENV !== 'production';
var server = devEnv ? 'http://localhost:3000' : 'https://cmtt-diet-gopher.herokuapp.com/';

const express = require('express');
const mongoose = require('mongoose');
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  const PORT = process.env.PORT || 3000;

  server.use(express.urlencoded({ extended: false }));
  server.use(express.json());
  server.use(express.static('pages'));

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  let db = require('./models/mysql');

  db.sequelize
    .sync({ force: false })
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
