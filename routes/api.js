var express = require('express');
var router = express.Router();
var endpoints = require('./endpoints/endpoints');

router.post('/findSummoner', function(req, res) {
    var name = req.body.summoner_name;
    console.log('PARAM: ' + name);
    
    endpoints.findSummonerByName(name, function(data) {
        console.log('Objeto retornado: ' + JSON.stringify(res));
        console.log(data[name.toLowerCase()]);
    });
    res.send(JSON.stringify(res));
    res.end();
});

module.exports = router;