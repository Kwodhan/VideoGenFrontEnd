'use strict';

/**
 * @ngdoc function
 * @name videoGenApp.controller:ChoixfilmCtrl
 * @description
 * # ChoixfilmCtrl
 * Controller of the videoGenApp
 */
angular.module('videoGenApp')
  .controller('ChoixfilmCtrl', ['$scope','ActeurRest','$routeParams','$location','generator','urlBack','$anchorScroll',
  function ($scope, ActeurRest,$routeParams,$location,generator,urlBack,$anchorScroll) {

  var choixFilm = [];
  var promise = ActeurRest.getFilmsByActeur($routeParams.id);
  promise.then(function(data) {
    $scope.liste = data;
  });


  $scope.set_color = function (id) {
    if (choixFilm.indexOf(id) >= 0) {

      return {'border-color':'#92a8d1',
              'border-width':'1px'};
    }
  }


  $scope.ajouter = (id) => {
      if(choixFilm.indexOf(id) >= 0){
        var index = choixFilm.indexOf(id);
        choixFilm.splice(index, 1);
      }else{
        choixFilm.push(id);
      }
      if(choixFilm.length == 3){

        var myEl = angular.element( document.querySelector( '#link' ) );
        myEl.append('<a ng-click="download()" href="'+urlBack+'/generator/request?acteur='+$routeParams.id+'&film1='+choixFilm[0]+'&film2='+choixFilm[1]+'&film3='+choixFilm[2]+'" id="download" class="btn btn-info center-block" role="button" >Télécharge ton Quizz</a>');
        myEl.append('<h5 id="textIndication">La création du Quizz peut prendre plusieurs secondes</h5>');
        $anchorScroll('download');
      } else {
        var myEl = angular.element( document.querySelector('#download' ));
        myEl.remove();
        var myEl2 = angular.element( document.querySelector('#textIndication' ));
        myEl2.remove();
      }

}



}]);
