var blog = require('../models/dashboard');

exports.userBlog = function (req, res) {
    blog.userBlog(req, function (err, result) {
        if (err) {
            throw err;
        } else {
            var name = req.session.name;
            if (name == undefined) {
                res.redirect("/");
                return;
            } else {
                console.log('data = ', result);
                res.render('dashboard', {data: result});
            }
        }
    });
}


exports.readBlog = function (req, res) {
    blog.readBlog(req, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log('data = ', result);
            res.render('read_view', {data: result});
        }
    });
}

exports.allBlog = function (req, res) {
    blog.all(req, function (err, result) {
        if (err) {
            throw err;
        } else {
            console.log('index = ', result);
            res.render('index', {data: result});
        }
    });
}


