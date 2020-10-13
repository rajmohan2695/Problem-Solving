const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());
const users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10); // default value will 10 even if we didn't specify
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        // const hashedPassword = await bcrypt.hash(req.body.password, 10); // Can also insert the salt directly
        const user = {
            username: req.body.username,
            password: hashedPassword,
        }
        users.push(user);
        res.status(201).send();
    }
    catch(err){
        res.status(500).send();
    }
});

app.post('/login', async (req, res) => {
    try{
        const user = users.find((user) => user.username === req.body.username)
        if(user){
            if(await bcrypt.compare(req.body.password, user.password)){
                res.send('Login successful');
            }
            else {
                res.send('Invalid user credentials');
            }
        }
        else {
            res.send('User not found');
        }
    }
    catch(err) {
        res.send('Unable to login, try after sometime');
    }
});

app.listen(3100);
