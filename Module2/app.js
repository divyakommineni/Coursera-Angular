(function () {
  'use strict';

  angular.module('ShoppingListCheckOffApp', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  // To Buy List  - controller
  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var list1 = this;
    //var list1 = shoppingList.getToBuyItems();

    list1.items = ShoppingListCheckOffService.getToBuyItems();

    list1.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
      if(list1.items.length == 0)
      {
       list1.emptyMessage = "Everything Bought!";

      }
    };
  }

  // Already Bought list  - controller
  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var list2 = this;

    list2.items = ShoppingListCheckOffService.getBoughtItems();

    list2.checkitems = function () {
      if(list2.items.length == 0){
        list2.emptyMessage = "Nothing Bought Yet";
      }
      if(list2.items.length !== 0){
        list2.emptyMessage = "";
      }
  };
  }

  // shopping list service
  function ShoppingListCheckOffService() {
    var service = this;

    // List of shopping items
    var toBuyitems = [
      { name: "cookies", quantity: 10 },
      { name: "flour", quantity: 2 },
      { name: "kale", quantity: 2 },
      { name: "oranges", quantity: 10 },
      { name: "milk", quantity: 1 },
      { name: "apples", quantity: 10 }
    ];

    var boughtItems = [];
    service.AlreadyBoughtemptyMessage = "Nothing Bought Yet";
    service.boughtItem = function (itemIndex) {
        var item = {
          name: toBuyitems[itemIndex].name,
          quantity: toBuyitems[itemIndex].quantity
        };
        toBuyitems.splice(itemIndex, 1);
        boughtItems.push(item);
        if(boughtItems.length != 0){
            service.AlreadyBoughtemptyMessage = "";
        }
    };

    service.getToBuyItems = function () {
      return toBuyitems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };
  }
})();
