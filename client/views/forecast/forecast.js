/* jshint camelcase:false */
(function(){
  'use strict';

  angular.module('weather')
  .controller('ForecastController', ['$scope', 'wu',function($scope, wu){
    $scope.title = '10-Day Forecast';

    $scope.addZip= function(){
      $scope.hideZip = !!!$scope.hideZip;
      $scope.showZip = !!!$scope.showZip;
      $scope.zip = ($scope.zip * 1);

      wu.getForecast($scope.zip).then(function(response){
        $scope.forecasts = response.data.forecast.txt_forecast.forecastday;
      });
    };
  }]);
})();
