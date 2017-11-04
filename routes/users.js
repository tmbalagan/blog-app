var express = require('express');
var router = express.Router();
var users = require('../routes/services/users');
var create = require('../routes/services/create')
var blog = require('../routes/services/dashboard')
var comments = require('../routes/services/comments')
/* GET users listing. */

/* --------------------signup get --------------------------*/
router.get('/signUp', function (req, res) {
    res.render('signUp', {title: 'signUp Page',signUp_errors: req.flash('signUp_errors'),name_exit:req.flash('name_exit')});
});

/* --------------------sign-up post --------------------------*/
router.post('/sign-up',users.signUp);

/* --------------------signin get --------------------------*/
router.get('/', function (req, res) {
    res.render('signIn',{title: 'signIn Page', signIn_errors: req.flash('signIn_errors'), error_credential:req.flash('error_credential')});
});

/* --------------------sigin post --------------------------*/
router.post('/signIn',users.signIn);

/* --------------------dashboard get--------------------------*/
router.get('/dashboard', blog.userBlog);
/* --------------------create page get --------------------------*/
router.get('/dashboard/create', function(req, res) {
    res.render('create');
});

/* -------------------- post create --------------------------*/

router.post('/create',create.createBlog);


/* -------------------- get blog read --------------------------*/
router.get('/dashboard/read/:title',blog.readBlog);


/* -------------------- comment post --------------------------*/
router.post('/comments',comments.save);

/* -------------------- comment get --------------------------*/
router.get('/comments/get',comments.show);

module.exports = router;
