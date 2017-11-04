var createBlog = function f(option) {
    var self = this;
}

createBlog.create = function (req, callback) {
    var title = req.body.title;
    var text = req.body.text;
    var name = req.session.name;
    var date = new Date();
    var create_date = date.getDate() + '-' + date.getMonth() + '-'+date.getFullYear();
    console.log('text = ',text);
    console.log('name = ',name);
    console.log('create_date = ',create_date);


    //var sql = 'insert into users SET ?';
    var query = db.query('INSERT INTO blog ' +
        'SET title = ?, text = ?, name = ?,date = ?',
        [title, text,name,create_date],function (err, result) {
        callback(err, result);
    });
}

module.exports = createBlog;