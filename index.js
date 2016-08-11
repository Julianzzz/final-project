// jQuery for functions on hover
$('.gif_me').hover(function() {
  $(this).addClass('rotating');
});

// jQuery for gyphy=1 onClick
$('#giphy-1').click(function() {
  // Fist action - display overlay
  $('.overlay').css('display', 'block');

  // Action - video-1 to display
  $('#video_1').css('display', 'block');
});

$('#giphy-2').click(function() {
  // Fist action - display overlay
  $('.overlay').css('display', 'block');

  // Action - video-3 to display
  $('#video_2').css('display', 'block');
});

$('#giphy-3').click(function() {
  // Fist action - display overlay
  $('.overlay').css('display', 'block');
  // Action - video-3 to display
  $('#video_3').css('display', 'block');
});

$('#giphy-4').click(function() {
  // Fist action - display overlay
  $('.overlay').css('display', 'block');
  // Action - video-4 to display
  $('#video_4').css('display', 'block');
});

$('#giphy-5').click(function() {
  // Fist action - display overlay
  $('.overlay').css('display', 'block');
  // Action - video-5 to display
  $('#video_5').css('display', 'block');
});

$('#giphy-6').click(function() {
  // Fist action - display overlay
  $('.overlay').css('display', 'block');
  // Action - video-6 to display
  $('#video_6').css('display', 'block');
});

// Remove overlay on x click
$('.x-icon').click(function() {
  $('.overlay').css('display', 'none');
//Remove video
  $(".remove").css('display', 'none');
});
// // mobile menu
$(document).ready(function(){
  $(".burger-nav").click(function(){
    $("header nav ul").toggleClass("open");
  });    
});

