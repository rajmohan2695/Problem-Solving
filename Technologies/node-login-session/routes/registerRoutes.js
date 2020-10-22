const express = require('express');
const route = express.Router();
const registerController =  require('../controller/registerController')
route.get('/', registerController.renderRegisterPage);

module.exports = route;
