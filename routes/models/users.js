var users = function f(option){
    var self = this;
}

/*-----------------------signUp modal---------------------------------*/

users.signUp = function (req, callback) {
    if (req.method == 'POST') {
        var name = req.body.name;
        var password = req.body.password;
        var email = req.body.email;
        db.query("SELECT 1 FROM users WHERE name = '" + name + "' ORDER BY name LIMIT 1", function (err, result) {
            if (err) {
                console.log('###########', err);
                callback(err, null);
            }
            if (result.length > 0) {
                console.log('fail');
                callback(null, null);
            } else {
                console.log('insert');
                var query = db.query (
                    'INSERT INTO users ' +
                    'SET email = ?, password = ?, name = ?',
                    [email, password,name]
                );
                callback(err, result);
            }
        });

    }
}

/*-----------------------signIn modal---------------------------------*/

users.signIn = function(req, callback){
    var sess = req.session;
    if (req.method == 'POST') {
        var name = req.body.name;
        var password = req.body.password;
        console.log('in post')
        var sql = "select name,password from users WHERE `name`='" + name + "' and password = '" + password + "'";
        var query = db.query(sql, function (err, result) {
            if (err) {
                console.log('in res else err');

                callback(err, null);
            } else if (!result) {
                console.log('in res else if err');

                callback(null, null);
            } else {
                if (result.length > 0) {
                    if ((name == result[0].name) && (password == result[0].password)) {
                        /*-----------------------req.session---------------------------------*/
                        req.session.name = result[0].name;
                        req.session.user = result[0];
                        //req.session.user this specify you can other router other else you get undefined
                        /*-----------------------req.session---------------------------------*/
                        callback(err, result);
                    } else {
                        console.log('in res err');
                        callback(err, null)
                    }
                }
            }
        });
    }
}

module.exports = users;