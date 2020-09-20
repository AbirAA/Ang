(function () {
    'use strict';

    angular.module('Data')
    .controller('MainMenuAppController', MainMenuAppController);


    MainMenuAppController.$inject = ['MenuDataService', 'items'];
    function MainMenuAppController(MenuDataService, items) {
        var mainList = this;
        mainList.items = items;
    }

})();
