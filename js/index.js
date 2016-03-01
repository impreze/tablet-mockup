

$('.menu-toggle').click( function(){  
  $(".menu-content").slideToggle(500);
  $(".menu").toggleClass("menu-hide", 500);
  if ( $("#menu").hasClass( "menu-hide" )){
    $('.menu-toggle').html("<i class='fa fa-times'></i>");
  } 
  else {
    $('.menu-toggle').html("<i class='fa fa-plus'></i>");
  } 
});

$('.power').click( function() {
  $('#content').fadeToggle("slow");
  $('#menu').fadeToggle("slow");
});