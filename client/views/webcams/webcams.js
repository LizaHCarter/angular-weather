/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('WebcamsController', ['$scope', 'wu', function($scope, wu){
    $scope.title = 'Webcams';

    $scope.viewCams = function(){
      $scope.hideForm = !!!$scope.hideForm;
      $scope.showForm = !!!$scope.showForm;
      $scope.zip = ($scope.zip * 1);
      wu.getWebcams($scope.zip).then(function(response){
        $scope.webcams = response.data.webcams;
      });
    };
  }]);
})();

