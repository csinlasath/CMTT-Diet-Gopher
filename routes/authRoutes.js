const User = require('../models/mongodb/user');
const passport = require('passport');

module.exports = function (server) {
    server.get('/register', (req, res) => {
        User.register(new User({
            email: req.body.email,
            password: req.body.password
        }), (err, user) => {
            if (err) {
                console.error(err);
                return res.redirect('/');
            }
            else {
                console.log(user);
                passport.authenticate("local", (req, res) => {
                return res.redirect('/');
                }); 
            }
        });
    });

    server .post('/register', (req, res) => {
        console.log(req.body);
    });
}