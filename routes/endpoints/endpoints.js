var querystring = require('querystring');
var https       = require('https');

var HOST = 'br.api.pvp.net'
var ENDPOINT_FIND_SUMMONER_BY_NAME = '/api/lol/br/v1.4/summoner/by-name/';

// var ENDPOINT_FIND_LAST_GAMES_BY_ID = 'https://br.api.pvp.net/api/lol/br/v1.3/game/by-summoner/{summoner-id}/recent';

var parameters = {
     'api_key': "RGAPI-019E5ACE-B9C8-4C48-9058-6761E622DB76"
};

function findSummonerByName(name, success) {
    var dataString = JSON.stringify(parameters);
    // var headers = {};
    var endpoint = ENDPOINT_FIND_SUMMONER_BY_NAME + name + '?' + querystring.stringify(parameters);
    
    console.log('GET on: ' + HOST + endpoint);
    
    var options = {
        host: HOST,
        path: endpoint,
        method: 'GET'
    };

    var req = https.request(options, function(res) {
        res.setEncoding('utf-8');
        var responseString = '';

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('error', function () {
            console.log("Erro: " + error);
        });

        res.on('end', function() {
            console.log('Response: ' + responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });

    });
    req.write(dataString);
    req.end();
}

exports.findSummonerByName = findSummonerByName;