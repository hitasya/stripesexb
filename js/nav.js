// elements
var $page = $('.page');
var $menu = $('.menu_items');

$('.menu_toggle').on('click', function(){
  $page.toggleClass('shazam');
  $menu.toggleClass('inactive');
});
$('.content').on('click', function(){
  $page.removeClass('shazam');
  $menu.addClass('inactive');
});
