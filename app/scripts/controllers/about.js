'use strict';

angular.module('ngApp')
  .controller('AboutCtrl', function ($scope, $anchorScroll) {
    $scope.scrollTo = function(id) {
       // $location.hash(id);
       $anchorScroll();
    }
  });
