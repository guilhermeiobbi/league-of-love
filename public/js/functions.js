function getSummoner() {
    var summName = $('#inputName').val();
    var url = "/api/summoner/" + summName;
    
    $.get(url, function(err, res) {
        alert('Deu bom local call' + res);

        console.log(res);
    });
    return false;
}