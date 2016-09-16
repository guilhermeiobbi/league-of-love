var https       = require('https');
var queryString = require('query-string');

var ENDPOINT = "/api/lol/br/v1.4/summoner/by-name/";
var HOST = "br.api.pvp.net";

var parameters = {
     'api_key': 'RGAPI-019E5ACE-B9C8-4C48-9058-6761E622DB76'
};

function findSummonerByName(name, success) {
    var headers = {};
    
    var endpoint = ENDPOINT + name + '?' + queryString.stringify(parameters);
    console.log('GET on: ' + HOST + endpoint);
    
    var options = {
        host: HOST,
        path: endpoint,
        method: 'GET',
        headers: headers
    };

    var req = https.request(options, function(res) {
        res.setEncoding('utf-8');
        var responseString = '';

        res.on('error', function () {
            console.log("Erro: " + error);
        });

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });
    });
    req.end();
}

exports.findSummonerByName = findSummonerByName;