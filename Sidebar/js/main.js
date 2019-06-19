$(document).ready(function() {

  // REMOVE LINK FROM TOP MENU ITEM
  $('.sidebarNavItem .menu-item > a').first().removeAttr('href');

  // SIDEBAR NAV MENU

  var nav_item = $('.sidebarNavItem li');

  $(nav_item).mouseover(function() {
    $('ul:first()', this).addClass('visible');
  }).mouseout(function() {
    $('ul:first()', this).removeClass('visible');
  });

  // SIDEBAR NAV MENU END
});
