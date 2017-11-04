var createBlog = require('../models/create');

exports.createBlog = function (req, res) {
    createBlog.create(req, function (err, result) {
            if (err) {
                res.render('create');
            }else {
                res.redirect('/dashboard');
            }
        });
}