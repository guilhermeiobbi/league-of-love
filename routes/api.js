var express = require('express');
var router = express.Router();

var endpoints = require('./endpoints/endpoints');

router.post('/summoner', function(req, res) {
    var name = req.body.summoner_name;
    console.log('PARAM: ' + name);
    endpoints.findSummonerByName(name, function(data) {
        console.log(data[name.toLowerCase()]);
    });
});

module.exports = router;