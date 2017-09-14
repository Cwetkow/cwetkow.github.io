// $('.mobile-tab').hide();

// $('#burg').on('click', function(){
//   $('.mobile-tab').slideToggle(400);
// })

$(document).ready(function(){
  
      $(".menu-trigger").click(function () {
        $(".ul-trigger").slideToggle();
      });
      $(window).resize(function(){
        if ($(window).width() > 767) {
          $('.ul-trigger').removeAttr('style');
        };
      });
    });