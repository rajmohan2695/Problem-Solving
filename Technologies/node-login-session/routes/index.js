const express = require('express');
const route = express.Router();
const homeController = require('../controller/index');
const usersController = require('../controller/users');

route.get('/', homeController.renderHomePage);
route.get('/register', usersController.renderRegisterPage);

module.exports = route;
