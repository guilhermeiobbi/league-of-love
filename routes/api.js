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
            if(data['status']) {
                res.send('<h1>INVOCADOR NAO ESTA EM JOGO.</h1>');
            } else {
                if(data['gameType'] == 'MATCHED_GAME') {
                    res.send('<h1>INVOCADOR EM JOGO RANKEADO. APENAS RESPEITE!</h1>')
                    res.end();
                }
            }
        })
        
        // res.send({ id: summId });
        // res.end();
    });
});

module.exports = router;