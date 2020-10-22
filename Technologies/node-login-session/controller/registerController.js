exports.renderRegisterPage = (req, res) => {
    res.render('register', {
        title: 'Register page',
        description: 'Register here'
    })
}
