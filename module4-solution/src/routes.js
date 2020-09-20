(function () {
'use strict';

angular.module('Data')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/main-categories.template.html',
    controller: 'MainMenuAppController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) { 
        return MenuDataService.getAllCategories();
      }]
    }	  
  })


   .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuapp/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
                return MenuDataService.getItemsForCategory($stateParams.itemId)
                .then(function (items) {
                  return items.menu_items;
                });
            }]
    }
  });
  
  
}

})();
