(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menuapp/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
