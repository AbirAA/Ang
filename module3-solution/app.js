(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      foundList: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;


}


NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
function NarrowItDownController($scope, MenuSearchService) {
  var menu = this;
  menu.found = [];
  $scope.searchTerm = "";

  menu.narrowItDown = function (shortName) {
    
    var promise = MenuSearchService.getMatchedMenuItems($scope.searchTerm);

    promise.then(function (response) {
      menu.found = response;
      
    })
    .catch(function (error) {
      console.log(error);
    })
  };

  menu.removeItem = function (index) {
    menu.found.splice(index, 1);
  }

}


MenuSearchService.$inject = ['$http', 'ApiBasePath']
function MenuSearchService($http, ApiBasePath) {
  var service = this;

 

  service.getMatchedMenuItems = function (searchTerm) {
    if (!searchTerm)
      return;

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    }).then(function (response) {
      var filteredItems = [];
      if (!response || !response.data || !response.data.menu_items)
        return filteredItems;

      var menu_items = response.data.menu_items;
      for (var i = 0; i < menu_items.length; i++)
      {
        if (menu_items[i].description.indexOf(searchTerm) >= 0)
          filteredItems.push(menu_items[i]);
      }


      return filteredItems;
    })
    .catch(function (error) {
      console.log(error);
    })
  };

}

})();
