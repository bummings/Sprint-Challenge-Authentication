const jwt = require('jsonwebtoken');
const jwtKey = require('../_secrets/keys').jwtKey;

// E X P O R T    M I D D L E W A R E  for  I M P O R T S
module.exports = {
  authenticate,
  generateToken
};

// A U T H E N T I C A T E   J W T   T O K E N
function authenticate(req, res, next) {
  const token = req.get('Authorization');

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header'
    });
  }
}

// G E N E R A T E   J W T   T O K E N
function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const secret = jwtKey;
  const options = {
    expiresIn: '1m'
  };

  return jwt.sign(payload, secret, options);
}
