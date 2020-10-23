const User = require('../modals/users');
const bcrypt = require('bcrypt');

exports.renderRegisterPage = (req, res) => {
    res.render('register', {
        title: 'Register page',
        description: 'Register here'
    })
}

exports.renderWelcomePage = (req, res) => {
    const { email, password } = req.body;
    User.findOne({email}).exec((err, user) => {
        if(err) { res.send('Invalid user')}
        if(user){
            comparePasswords(password, user.password, res);
        }
        else {
            res.send('User not found')
        }
    })
}

exports.renderLoginPage = (req, res) => {
    res.render('login', {
        title: 'Login',
        description: 'Enter details to login'
    });
}

exports.validateAndCreateUser = (req, res) => {
    const { name, email, password, cpassword } = req.body;
    // res.send({name, email, password, cpassword});
    const errors = [];
    if( !name || !email || !password || !cpassword ) {
        errors.push('Insufficient data to handle the request')
    }

    if(password.length < 6) {
        errors.push('Password is not strong');
    }

    if( password !==  cpassword ) {
        errors.push('Passwords does not match')
    }

    User.findOne({email}).exec((err, user) => {
        if(user) {
            errors.push('Email already exists');
            res.status(404).send(errors)
        }
        else {
            storeUserDetailsToDB({ email, name, password }, res);
        }
    })
}

async function storeUserDetailsToDB(userDetails, res) {
    try {
        const { email, name, password } = userDetails;
        const encryptedPassword = await encryptPassword(password);
        new User({
            email, name, password: encryptedPassword,
        }).save();
        res.send({email})
    }
    catch(err) {
        console.error(err);
    }
}

function encryptPassword(password) {
    return bcrypt.hash(password, 10);
}

async function comparePasswords(password, encPassword, res) {
    if(await bcrypt.compare(password, encPassword)) {
        res.render('welcome', {
            title: 'Login',
            description: 'Login Successful',
        });
    }
    else {
        res.send('Invalid Credentials');
    }
}
