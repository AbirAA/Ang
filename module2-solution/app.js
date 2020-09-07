(function () {
'use strict';
    
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
      var showList = this;
      showList.Message= "Everything is bought!";
      showList.itemstobuy = ShoppingListCheckOffService.getItemsToBuy();
      showList.ItemBought= function (itemIndex) {
      

        ShoppingListCheckOffService.ItemBought(itemIndex);
        
    
      
      }
      
    }
    
    
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
      var showList = this;
      showList.Message= "Nothing bought yet.";
      showList.itemsbought = ShoppingListCheckOffService.getItemsBought();
      
    
     
    }
    
    
    function ShoppingListCheckOffService() {
      var service = this;
    
      // List of shopping items
      var itemstobuy = [{ name: "Cookies", quantity: 10 },
                        { name: "Pies", quantity: 20 },
                        { name: "Crisps", quantity: 3 },
                        { name: "Sodas", quantity: 10 },
                        { name: "Toffees", quantity: 30 },
                    ];
      var itemsbought = [];
    
    
      service.ItemBought = function (itemIndex) {
        itemsbought.push(itemstobuy[itemIndex]);
        itemstobuy.splice(itemIndex, 1);
      };
    
      service.getItemsToBuy = function () {
        console.log(itemstobuy[0]);
        return itemstobuy;
      };
      service.getItemsBought = function () {
        return itemsbought;
      };

      
    }
    
    })();
    