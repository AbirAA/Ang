(function () {
  'use strict';
  
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message="";
    $scope.Order = "";
    $scope.sayMessage = function () {
      $scope.message =   $scope.CheckOrder();
      
    };
  
    $scope.CheckOrder = function () {
      var toll  = $scope.Order.split(',');
    
      if (toll.length==0 || toll[0]=="") {
        return "Please enter data first";
      } else if (toll.length>3  && toll[toll.length-1]!='') {
        return "Too much!";
      } else {
        return "Enjoy!";
      }
      
    };
  }
  
  })();
