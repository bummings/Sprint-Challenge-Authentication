const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { server } = require('./server.js');

const db = require('./database/dbConfig.js');

const port = process.env.PORT || 3300;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});
