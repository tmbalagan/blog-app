var users = require('../models/users');

/*-----------------------signUp export---------------------------------*/

exports.signUp = function (req, res) {

    req.check('name', 'please fill name field').notEmpty();
    req.check('email', 'please fill email field').isEmail();
    req.check('password', 'password must have min 3 char').isLength({min: 3});
    var errors = req.validationErrors();
    console.log('errors = ', errors);
    if (errors) {
        req.flash('signUp_errors', errors);
        res.redirect('/signUp');
    } else {
        users.signUp(req, function (err, result) {
            if (err) {
                res.render('signUp');
            } else if(!result){
                req.flash('name_exit', "username already exists");
                res.redirect('/signUp');
            }else {
                res.redirect('/');
            }
        });
    }
}

/*-----------------------signIn export---------------------------------*/


exports.signIn = function (req, res) {
    req.check('name', 'please fill name field').notEmpty();
    req.check('password', 'password must have min 3 char').isLength({min: 3});
    var errors = req.validationErrors();
    console.log('errors = ', errors);
    if (errors) {
        req.flash('signIn_errors', errors);
        req.flash('error_credential', 'Sign In Credential Wrong');
        res.redirect('/');
    } else {
        users.signIn(req, function (err, result) {
            if (err) {
                console.log('in err');
                req.flash('error_signIn', 'Sign In Credential Wrong');
                res.redirect('/');
            } else if (!result || result == '') {
                console.log('in !result');
                req.session.errors = false;
                req.flash('error_signIn', 'Sign In Credential Wrong');
                res.redirect('/');
            } else {
                console.log('in result');
                req.flash('success_msg', 'login successfully');
                req.flash('welcome_msg', req.session.name);
                res.redirect('/dashboard');
            }
        });
        //req.flash('error_signIn','Sign In Credential Wrong');
        //res.redirect('/');
    }

}

/*-----------------------logout export---------------------------------*/

exports.logout = function(req, res){
    var message = '';
    req.session.destroy(function(err) {
        res.redirect("/");
    })
};
