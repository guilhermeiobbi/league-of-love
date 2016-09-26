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



