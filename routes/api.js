var express = require('express');
var router = express.Router();
var endpoints = require('./endpoints/endpoints');

router.post('/findSummoner', function(req, res) {
    var name = req.body.summoner_name;
    var reg = req.body.region;
    console.log('PARAMs: ' + name + ', ' + reg);
    
    endpoints.findSummonerByName(name, function(data) {
        console.log('Objeto retornado do Endpoint: ' + JSON.stringify(data));
        console.log(data[name.toLowerCase()]);
        res.send('Toiss');
        res.end();
    });
});

module.exports = router;