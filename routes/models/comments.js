var comments = function f(options) {
    var self = this;
}

comments.save = function (req, callback) {
    var title = req.session.title;
    var name = req.session.name;
    var user = req.body.name;
    var comment = req.body.comment;
    var date = new Date();
    var create_date = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
    console.log('title = ', title);
    console.log('name = ', name);

    var query = db.query('INSERT INTO comments ' +
        'SET title = ?, user = ?, name = ?,date = ?,text = ?',
        [title, user, name, create_date, comment], function (err, result) {
            console.log('in comments #########');
            callback(err, result);
        });
}


comments.show = function(req, callback){
    var sess = req.session;
    var name = req.session.name;
    var title = req.session.title;
    console.log('************* = ',name);
    var sql = 'select id, name, user, title, text, date from comments WHERE `title`= ?';
    db.query(sql, [title],function (err, result) {
        callback(err,result);
    });
}

module.exports = comments;