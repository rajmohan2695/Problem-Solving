const express = require('express');
const route = express.Router();
const registerController =  require('../controller/users');
const usersController = require('../controller/users');
route.get('/', registerController.renderRegisterPage);
route.get('/register', registerController.renderRegisterPage);
route.get('/login', usersController.renderLoginPage);
route.post('/register', registerController.validateAndCreateUser);
route.post('/login', registerController.renderWelcomePage);

module.exports = route;
