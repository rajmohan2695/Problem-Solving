const express = require('express');
const index = require('./routes/index');
const users = require('./routes/users');
const expressEjsLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const app = express();
mongoose.connect('mongodb+srv://raj1234:Raj1234@cluster1.r4efp.mongodb.net/login-node?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB Connected...'))
.catch((err) => console.log(`Error occured while initializing db ${err}`))
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs');
app.use(expressEjsLayout);
app.set('views', 'views');

app.use('/', index);
app.use('/users', users);

app.listen(3200);
