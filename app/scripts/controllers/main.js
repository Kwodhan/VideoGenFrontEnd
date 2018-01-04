'use strict';

/**
 * @ngdoc function
 * @name videoGenApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the videoGenApp
 */
angular.module('videoGenApp')
  .controller('MainCtrl', ['$scope','ActeurRest','$location',function ($scope, ActeurRest,$location) {

  var promise = ActeurRest.getActeurs();
  promise.then(function(data) {
    $scope.liste = data;
  });

  $scope.ajouter = (id) => {
        $location.path('/choixfilm/'+id);
        }



}]);
