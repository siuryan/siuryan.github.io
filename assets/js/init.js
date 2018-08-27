$(document).ready(function(){
  $('.sidenav').sidenav();
  $('.parallax').parallax();
});

imagesLoaded( document.querySelector('.grid'), function( instance ) {
  var msnry = new Masonry( '.grid', {
    horizontalOrder: true
  });
});
