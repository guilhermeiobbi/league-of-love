var express   = require('express');
var router    = express.Router();
var endpoints = require('./endpoints/endpoints');
const pug     = require('pug');

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
        endpoints.findLiveGameById(reg, summId, function(data) {
            if(data['status']) {
                res.render(
                    'notingame',
                     { name: name });
            } else {
                if(data['gameType'] == 'MATCHED_GAME') {
                    // console.log('>>>>>>>> Nome: '+ data.participants.summonerName[name].championId)
                    res.render(
                    'ingame',
                     { name: name });
                    res.end();
                }
            }
        })
        
        // res.send({ id: summId });
        // res.end();
    });
});

module.exports = router;