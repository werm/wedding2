/*global $:false */
'use strict';


$(window).scroll(function() {
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('.page-scroll a').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});

$(window).load(function(){

  $('.swatch').swatchify();
  // var engaged = new Date(2014, 4-1, 8)
  $('#countdown').countdown({since: new Date("March 8, 2014 20:00:00"), compact: true, 
      layout: '<h3>Engaged for...</h3><h2>{on} months, {dn} days</h2> {desc}', 
          description: ''});
      // format: 'YOWD', description: 'Engaged for...'});
  // $('#side-nav .nav').waypoint('sticky', {
  //   offset: 80
  // });

});