'use strict';

/**
 * @ngdoc service
 * @name videoGenApp.generator
 * @description
 * # generator
 * Service in the videoGenApp.
 */
angular.module('videoGenApp')
  .service('generator',['$http', 'urlBack',function ($http,urlBack) {

    var urlBase = '/generator/';

    this.getVideoGen = function (id,film1,film2,film3) {
      var Gene = $http({  method: "GET",
                          url: urlBack+urlBase+'request',
                          params : {acteur:id ,film1:film1 ,film2:film2 ,film3:film3},
    });
    var text = Gene.then(function(data) {
      
      return data.data;
    });
    return text;
}



  }]);
