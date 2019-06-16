$(document).ready(function() {
  $('.sidebarNavItem .menu-item').mouseover(function() {
		$('.sub-menu', this).addClass('visible');
	}).mouseout(function() {
		$('.sub-menu', this).removeClass('visible');
	});
});
