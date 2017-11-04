var blog = function f(option) {
    var self = this;
}


blog.userBlog = function(req, callback){
    var sess = req.session;
    var name = req.session.name;
    console.log('************* = ',name);
    var sql = 'select name, title, text, date from blog WHERE `name`= ?';
    db.query(sql, [name],function (err, result) {
        //req.session.title = result[0].title;
        //console.log('!!!!!!!!!!!! = ',req.session.title);
        //req.session.blog = result[0];
        callback(err,result);
    });
}

blog.readBlog = function(req, callback){
    //var name = req.session.name;
    var sess = req.session;
    var title = req.params.title;
    req.session.title = title;
    console.log('************* = ',title);
    var sql = 'select  name, title, text, date from blog WHERE `title`= ?';
    db.query(sql, [title],function (err, result) {
        callback(err,result);
    });
}

module.exports = blog;