var Client = require('node-rest-client').Client;
var client = new Client();

var args = {
  parameters: {
     api_key: "RGAPI-019E5ACE-B9C8-4C48-9058-6761E622DB76"
  }
};

function findSummoner(summonerName) {
    console.log("Param: " + summonerName);

    var url = "https://br.api.pvp.net/api/lol/br/v1.4/summoner/by-name/" + summonerName;
    console.log("URL: " + url);
    client.get(url, args, function (data, response) {
        console.log(data);
    });
}

exports.findSummoner = findSummoner;