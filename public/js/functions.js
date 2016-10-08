$(function(){

    $(".dropdown-menu li a").click(function(){
        $("#regionBtn").text($(this).text());
        $("#inputRegion").val($(this).text());
    });
    
    $('#myForm').submit(function (e) {
        $('#searchIcon').addClass('fa fa-spinner fa-spin fa-1x fa-fw');
        $('#searchButton').prop('disabled', true);
    });

    $('#aboutBtn').click(function(){
        $('#homeLink').removeClass();
        $('#aboutLink').addClass('active');
    });

});

window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));



