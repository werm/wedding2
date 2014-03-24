'use strict';

angular.module('ngApp')
  .controller('AboutCtrl', function ($scope, $firebase, $anchorScroll) {
    var getTimeline = new Firebase("https://craigandnic.firebaseio.com/timeline");
    $scope.timeline = $firebase(getTimeline);
    $scope.scrollTo = function(id) {
       // $location.hash(id);
       $anchorScroll();
    }
  });