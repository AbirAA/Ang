(function () {
    'use strict';
    angular.module('myFirstApp',[])
    .controller('myFirstController', function ($scope) {
        $scope.name="Abir";
        $scope.sayHello= function () {
            return "Hellooo";
        };
    });
})();
/* browser-sync start --server --directory --files "**\/*" */