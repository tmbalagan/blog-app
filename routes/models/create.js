var createBlog = function f(option) {
    var self = this;
}

createBlog.create = function (req, callback) {
    var title = req.body.title;
    var text = req.body.text;
    var name = req.session.name;
    var date = new Date();
    var create_date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    var file = req.files.images;
    var img_name = file.name;

    console.log('file = ', file);
    if (file.mimetype == "image/jpeg" || file.mimetype == "image/png" || file.mimetype == "image/gif") {
        file.mv('../public/images/' + file.name, function (err) {
            if (err) {
                console.log('in errrrrrrrrrr');
                throw err;
            } else {
                console.log('in resultttttttttt');
                //var sql = 'insert into users SET ?';
                var query = db.query('INSERT INTO blog ' +
                    'SET title = ?, text = ?, name = ?,date = ?,image = ?',
                    [title, text, name, create_date,img_name], function (err, result) {
                        callback(err, result);
                    });
            }
        });
    } else {
        req.flash('img_err_msg', "This format is not allowed , please upload file with '.png','.gif','.jpg'");
    }
}

module.exports = createBlog;