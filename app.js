(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var ToBuy = this;
        ToBuy.items = ShoppingListCheckOffService.getItems();

        var itemAdder = this;
        itemAdder.itemIndex = -1;
        itemAdder.itemName = "";
        itemAdder.itemQuantity = "";

        this.AddToBought = function (Index, itemName, itemQuantity) {
            ShoppingListCheckOffService.addItem(itemName,itemQuantity);
            ShoppingListCheckOffService.removeItem(Index);
        }
    }


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var AlreadyBought = this;
        AlreadyBought.items = ShoppingListCheckOffService.getBoughtItems();
    }


    function ShoppingListCheckOffService() {
        var service = this;

        // List of shopping items
        var items = [
            { name: 'cookies', quantity: 10 },
            { name: 'Fries', quantity: 20 },
            { name: 'Chickens', quantity: 5 },
            { name: 'Ketchup ', quantity: 12 },
        ];
        var Boughtitems = [];

        service.addItem = function (itemName, quantity) {
            var item = {
                name: itemName,
                quantity: quantity
            };
            Boughtitems.push(item);
        };

        service.removeItem = function (itemIdex) {
            items.splice(itemIdex, 1);
        };

        service.getItems = function () {
            return items;
        };

        service.getBoughtItems = function () {
            return Boughtitems;
        };
    }

})();
