const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const path = require('path');
const dotenv = require('dotenv').config();

const goodsRoutes = require('./routes/good.js');
const userRoutes = require('./routes/user.js');

const app = express();
app.use(helmet());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/goods', goodsRoutes); 
app.use('/api/auth', userRoutes);
module.exports = app;