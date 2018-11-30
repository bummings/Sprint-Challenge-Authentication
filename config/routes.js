const axios = require('axios');
const db = require('../database/dbConfig.js');
const { server } = require('../server.js');
const bcrypt = require('bcryptjs');

const { authenticate } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/', rootRoute);
};

// testing root route
function rootRoute(req, res) {
  res.send('server is runnin on 3300');
}

function register(req, res) {
  const creds = req.body;
  const hash = bcrypt.hashSync(creds.password);
  creds.password = hash;

  db('users')
    .insert(creds)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => json(err));
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get('https://safe-falls-22549.herokuapp.com/random_ten')
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
}
