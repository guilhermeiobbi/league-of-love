var express   = require('express');
var router    = express.Router();
var endpoints = require('./endpoints/endpoints');

router.post('/findSummoner', function(req, res) {
    var name = (req.body.summoner_name).trim();
    var filteredName = name.replace(/\s/g, "%20")
    var reg = req.body.region;
    console.log('PARAMs: ' + filteredName + ', ' + reg);
    
    endpoints.findSummonerByName(reg, filteredName, function(data) {
        if(data['status']) {
                res.render(
                    'notexist',
                     { name: name });
                res.end();
                return;
        }
        
        validName = name.toLowerCase().replace(/\s+/g, '');
        console.log('validName: ' + validName);
        var summId = data[validName].id;
        var summName = data[validName].name;
        endpoints.findLiveGameById(reg, summId, function(data) {
            if(data['status']) {
                res.render(
                    'notingame',
                     { name: summName });
            } else {
                // if(data['gameType'] == 'MATCHED_GAME') {
                    res.render(
                    'ingame',
                     { name: summName });
                    res.end();
                // }
            }
        })
    });
});

module.exports = router;