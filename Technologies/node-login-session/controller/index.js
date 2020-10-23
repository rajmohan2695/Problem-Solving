exports.renderHomePage = (req, res) => {
    res.render('home', {
        title: 'Login',
        description: 'Login page',
    });
}
