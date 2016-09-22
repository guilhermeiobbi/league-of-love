$(function(){

    $(".dropdown-menu li a").click(function(){
        $(".btn:first-child").text($(this).text());
        $(".btn:first-child").val($(this).text());
        $("#inputRegion").val($(this).text());
    });
    
    $('#myForm').submit(function (e) {
        $('#searchIcon').addClass('fa fa-spinner fa-spin fa-1x fa-fw');
        $('#searchButton').prop('disabled', true);
    });

});



