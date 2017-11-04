
var events = require('events');
var event = new events.EventEmitter();

event.on('JsonResponse', function (req, res, data){
    res.status(200).send({success: true, data: data});
});

event.on('ErrorJsonResponse', function (req, res, err){
    res.status(500).send({success: false, data: err});
});

module.exports = event;