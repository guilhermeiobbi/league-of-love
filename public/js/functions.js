$(function(){

    $(".dropdown-menu li a").click(function(){
      $(".btn:first-child").text($(this).text());
      $(".btn:first-child").val($(this).text());
      $("#inputRegion").val($(this).text());
   });

   $('#searchButton').on('click', function () {
    if($('#inputName').val() != '') {
        var $btn = $(this).button('loading')
    }
    // business logic...
    //$btn.button('reset')
  })

});



