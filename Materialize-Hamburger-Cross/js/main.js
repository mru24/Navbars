$(document).ready(function() {
  $('.sidenav').sidenav();
  
  $('.navbar-toggler').removeClass('cross');
  $('.navbar-toggler').on('click', function() {
    $(this).toggleClass('cross');
  });
});
