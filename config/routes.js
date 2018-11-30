const axios = require('axios');
const db = require('../database/dbConfig.js');
const bcrypt = require('bcryptjs');

const { authenticate, generateToken } = require('./middlewares');

module.exports = server => {
  server.post('/api/register', register);
  server.post('/api/login', login);
  server.get('/api/jokes', authenticate, getJokes);
  server.get('/', rootRoute);
};

// R O O T   R O U T E
function rootRoute(req, res) {
  res.send('server is runnin on 3300');
}

// R E G I S T E R   R O U T E
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

// L O G I N   R O U T E
function login(req, res) {
  const creds = req.body;

  db('users')
    .where({ username: creds.username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(creds.password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({ message: 'Welcome!', token });
      } else {
        res.status(401).json({ message: 'Invalid login!' });
      }
    });
}

// J O K E S   R O U T E
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
