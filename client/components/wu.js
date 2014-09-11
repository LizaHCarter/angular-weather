(function(){
  'use strict';
  angular.module('weather')
  .factory('wu', ['$http', function($http){
    getUrl('conditions', '37203');
    function getUrl(service, zip){
      return 'http://api.wunderground.com/api/6904868a2f38a2ae/'+service+'/q/'+ zip+'.json?callback=JSON_CALLBACK';
    }
    function getConditions(zip){
      var url = getUrl('conditions', zip);
      return $http.jsonp(url);
    }
    function getWebcams(zip){
      var url = getUrl('webcams', zip);
      return $http.jsonp(url);
    }
    function getForecast(zip){
      var url = getUrl('forecast10day', zip);
      return $http.jsonp(url);
    }
    return {getConditions:getConditions, getWebcams:getWebcams, getForecast:getForecast};
  }]);
})();
