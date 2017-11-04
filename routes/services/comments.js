
var comments = require('../models/comments');
var event = require('../commons/eventEmit');

exports.save = function (req, res) {
    comments.save(req, function (err, result) {
        if(err){
            console.log('error 2222');
            event.emit('ErrorJsonResponse', req, res, err);
        }else{
            console.log('result');
            event.emit('JsonResponse', req, res, result);
        }
    });
}

exports.show = function (req, res) {
    comments.show(req, function (err, result) {
        if(err){
            event.emit('ErrorJsonResponse', req, res, err);
        }else{
            console.log('result');
            console.log('response = ',result);
            event.emit('JsonResponse', req, res, result);
        }
    });
}

