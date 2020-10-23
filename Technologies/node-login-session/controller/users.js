exports.renderRegisterPage = (req, res) => {
    res.render('register', {
        title: 'Register page',
        description: 'Register here'
    })
}

exports.renderWelcomePage = (req, res) => {
    res.render('welcome');
}

exports.renderLoginPage = (req, res) => {
    res.render('login', {
        title: 'Login',
        description: 'Enter details to login'
    });
}

exports.validateAndCreateUser = (req, res) => {
    const { name, email, password, cpassword } = req.body;
    res.send({name, email, password, cpassword});
}
