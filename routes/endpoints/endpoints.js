var querystring = require('querystring');
var https       = require('https');

var ENDPOINT = 'br.api.pvp.net'
var WEBSERVICE = '/api/lol/';

var WS_METHOD = '/v1.4/summoner/by-name/';
var WS_METHOD_CURRENT_GAME = 'observer-mode/rest/consumer/getSpectatorGameInfo/'

// var ENDPOINT_FIND_LAST_GAMES_BY_ID = 'https://br.api.pvp.net/api/lol/br/v1.3/game/by-summoner/{summoner-id}/recent';

var parameters = {
     'api_key': "RGAPI-019E5ACE-B9C8-4C48-9058-6761E622DB76"
};

function findSummonerByName(reg, name, success) {
    var path = WEBSERVICE + reg + WS_METHOD + name + '?' + querystring.stringify(parameters);

    console.log('GET on: ' + ENDPOINT + path);
    
    var options = {
        host: ENDPOINT,
        path: path
    };

    doRequest(options, function(data) {
        success(data);
    });
}

function findLiveGameById(reg, id, success) {
    var path = WEBSERVICE + WS_METHOD_CURRENT_GAME + getPlatformId(reg) + '/' + id + '?' + querystring.stringify(parameters);

    console.log('GET on: ' + ENDPOINT + path);

    var options = {
        host: ENDPOINT,
        path: path
    };

    doRequest(options, function(data) {
        success(data);
    });
}

function doRequest(options, success) {
    var req = https.get(options, function(res) {
        res.setEncoding('utf-8');
        var responseString = '';

        res.on('data', function(data) {
            responseString += data;
        });

        res.on('end', function() {
            console.log('Response: ' + responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);
        });

    });

    req.on('error', function (err) {
            console.log("Request error: " + err);
    });
}

function getPlatformId(region) {
    var platformId;
    switch (region) {
        case 'BR':
            platformId = "BR1";
            break;
        case 'EUNE':
            platformId = "EUN1";
            break;
        case 'EUW':
            platformId = "EUW1";
            break;
        case 'LAN':
            platformId = "LA1";
            break;
        case 'LAS':
            platformId = "LA2";
            break;
        case 'NA':
            platformId = "NA1";
            break;
        case 'OCE':
            platformId = "OC1";
            break;
        case 'RU':
            platformId = "RU";
            break;
        case 'TR':
            platformId = "TR1";
            break;
        case 'JP':
            platformId = "JP1";
            break;
        case 'SEA':
            platformId = "BR1";
            break;
        case 'KR':
            platformId = "KR";
            break;
    }
    return platformId;
}

exports.findLiveGameById = findLiveGameById;
exports.findSummonerByName = findSummonerByName;