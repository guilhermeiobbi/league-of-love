var express = require('express');
var router = express.Router();

var endpoints = require('./endpoints/endpoints');

router.get('/findSummByName/:name', function (req, res){
    console.log("api.js > findSummByName: req: " + req.params.name);
    endpoints.findSummoner(req.params.name);
});

module.exports = router;