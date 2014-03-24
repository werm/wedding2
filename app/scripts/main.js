'use strict';

angular.module('ngApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'slugifier',
  'sticky',
  'smoothScroll',
])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/colors', {
        templateUrl: 'views/colors.html'//,
        // controller: 'AboutCtrl'
      })
      .when('/conversation', {
        templateUrl: 'views/conversation.html'//,
        // controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

// app.run(function($rootScope, $location, $anchorScroll, $routeParams) {
//   //when the route is changed scroll to the proper element.
//   $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
//     $location.hash($routeParams.scrollTo);
//     $anchorScroll();  
//   });
// });