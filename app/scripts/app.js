'use strict';

angular.module('ngApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'//,
        // controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

  jQuery(function($) {
  $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class

    });
  });
$(window).load(function(){

  // var offsetScroll = $('#affix-nav').offset().top - 60;
  // $('.nav.sidenav').waypoint('sticky', {
  //   offset: 60
  // });

  $('#sidebar-nav').stickUp({
      parts: {
        0:'the-beginning',
        1:'meeting',
        2: 'moving-in',
        3: 'uneventful',
        4: 'second-biggest-day'
      },
      itemClass: 'nav-item',
      itemHover: 'active',
      marginTop: '60px'
    });
  // $('#the-beginning').waypoint(function(){
  //   offset: 60,
  //   $('a[href="#the-beginning"').addClass('active');
  // })
  // $('#meeting').waypoint(function(){
  //   offset: 60,
  //   $('a[href="#meeting"').addClass('active');
  // })
  // $('#moving-in').waypoint(function(){
  //   offset: 60,

  // })
  // $('#uneventful').waypoint(function(){
  //   offset: 60,

  // })
  // $('#second-biggest-day').waypoint(function(){
  //   offset: 60,

  // })
})