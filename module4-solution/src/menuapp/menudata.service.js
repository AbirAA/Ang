(function () {
    'use strict';

    angular.module('Data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http','$q', '$timeout']
    function MenuDataService($http,$q, $timeout) {
        var service = this;
        var items = [];

        service.getItemsForCategory = function (categoryShortName) {
       
            var deferred = $q.defer();
        
            $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
              })
            .success(function(data) {
                service.items = data;
                $timeout(function () {
                    deferred.resolve(data);
                    }, 200);
            })
            .error(function() {
                deferred.reject("Failed to get category items");
            });
            return deferred.promise;
        };




        

        service.getAllCategories = function () {

            var deferred = $q.defer();
            $http({
                method: "GET",
                url: ("https://davids-restaurant.herokuapp.com/categories.json")
                
              })
            .success(function(data) {
                service.items = data;
                $timeout(function () {
                    deferred.resolve(data);
                    }, 200);
            })
            .error(function() {
                deferred.reject("Failed to get the categories");
            });

            return deferred.promise;
        };

    }

})();
