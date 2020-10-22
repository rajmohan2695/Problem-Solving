const express = require('express');
const homeRoutes = require('./routes/homeRoutes');
const registerRoutes = require('./routes/registerRoutes');
const app = express();
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use('/', homeRoutes);
app.use('/register', registerRoutes);

// app.get('/', (req, res) => {
//     res.send(JSON.stringify({hey:"hello"}))
// });

app.listen(3200);
