'use strict';

/**
 * @ngdoc service
 * @name videoGenApp.ActeurRest
 * @description
 * # ActeurRest
 * Service in the videoGenApp.
 */
angular.module('videoGenApp')
.service('ActeurRest', ['$resource', 'urlBack',function ($resource,urlBack) {

  var urlBase = '/acteurs/';

  this.getFilmsByActeur = function (id) {
    var Films = $resource(urlBack+urlBase+':id', {id:'@id'});
    var films = Films.query({id:id}).$promise.then(function(data) {
      return data;
    });
    return films;
  };

  this.getActeurs = function () {
    var Acteurs = $resource(urlBack+urlBase,{});
    var acteurs = Acteurs.query().$promise.then(function(data) {

      return data;
    });
    return acteurs;
  };


}]);
