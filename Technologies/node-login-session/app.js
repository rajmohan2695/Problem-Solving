const express = require('express');
const index = require('./routes/index');
const users = require('./routes/users');
const expressEjsLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs');
app.use(expressEjsLayout);
app.set('views', 'views');

app.use('/', index);
app.use('/users', users);

app.listen(3200);
