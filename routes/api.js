var express = require('express');
var router = express.Router();
var endpoints = require('./endpoints/endpoints');

router.post('/findSummoner', function (req, res){
    var name = req.body.summoner_name;
    console.log('Name: ' + name);

    endpoints.findSummonerByName(name, function (res) {
        console.log('Objeto retornado: ' + JSON.stringify(res));
    });

    res.send('<p>hey</p>');
    res.end();
});

module.exports = router;