/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ConditionsController', ['$scope', 'wu',function($scope, wu){
    $scope.title = 'Current Conditions';

    $scope.addZip= function(){
      $scope.hideZip = !!!$scope.hideZip;
      $scope.showZip = !!!$scope.showZip;
      $scope.zip = ($scope.zip * 1);

      wu.getConditions($scope.zip).then(function(response){
        $scope.temp = response.data.current_observation.temp_f;
        $scope.weather = response.data.current_observation.weather;
        $scope.icon = response.data.current_observation.icon_url;
        $scope.feelsLike = response.data.current_observation.feelslike_f;
      });
    };
  }]);
})();
