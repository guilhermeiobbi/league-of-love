var express = require('express');
var router = express.Router();
var endpoints = require('./endpoints/endpoints');

router.post('/findSummoner', function(req, res) {
    var name = (req.body.summoner_name).toLowerCase().trim();
    var filteredName = name.replace(/\s/g, "%20")
    var reg = req.body.region;
    console.log('PARAMs: ' + filteredName + ', ' + reg);
    
    endpoints.findSummonerByName(reg, filteredName, function(data) {
        console.log('Invocador encontrado: ' + JSON.stringify(data));
        
        trimmedName = name.replace(/\s+/g, '');
        console.log('trimmedName: ' + trimmedName);
        var summId = data[trimmedName].id;
        endpoints.findLiveGameById(reg, summId, function(data) {
            if(data[gameType] == 'MATCHED_GAME') {
                res.send('INVOCADOR EM JOGO RANKEADO. APENAS RESPEITE!')
                res.end();
            }
        })
        
        // res.send({ id: summId });
        // res.end();
    });
});

module.exports = router;