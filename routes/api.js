var express            = require('express');
var router             = express.Router();
var endpoints          = require('./endpoints/endpoints');
const pug              = require('pug');

router.post('/findSummoner', function(req, res) {
    var name = (req.body.summoner_name).trim();
    var loweredName = name.toLowerCase();
    var filteredName = name.replace(/\s/g, "%20")
    var reg = req.body.region;
    console.log('PARAMs: ' + filteredName + ', ' + reg);
    
    endpoints.findSummonerByName(reg, filteredName, function(data) {
        console.log('Invocador encontrado: ' + JSON.stringify(data));
        
        trimmedName = loweredName.replace(/\s+/g, '');
        console.log('trimmedName: ' + trimmedName);
        var summId = data[trimmedName].id;
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