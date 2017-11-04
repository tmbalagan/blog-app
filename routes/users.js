var express = require('express');
var router = express.Router();
var users = require('../routes/services/users')
/* GET users listing. */
router.get('/signUp', function (req, res) {
    res.render('signUp', {title: 'signUp Page',signUp_errors: req.flash('signUp_errors'),name_exit:req.flash('name_exit')});
});
router.post('/sign-up',users.signUp);
router.get('/', function (req, res) {
    res.render('signIn',{title: 'signIn Page', signIn_errors: req.flash('signIn_errors'), error_credential:req.flash('error_credential')});
});
router.post('/signIn',users.signIn);

router.get('/dashboard', function(req, res) {
    res.render('dashboard');
});
module.exports = router;
