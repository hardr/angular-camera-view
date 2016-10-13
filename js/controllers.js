(function() {
  'use strict';

  var app = angular.module('cameraApp');

  app.controller('CartCtrl', function($scope) {
    this.cartItems = [];
    this.subtotal = 0;

    this.addToCart = function(itemInfo) {
      // check to see if camera is in array
      var checkItemInArray = this.cartItems.filter(function(item) {
        return item.name === itemInfo.name;
      })[0];
      // update array
      if (!checkItemInArray) {
        this.cartItems.push({
          quantity: 1,
          name: itemInfo.name,
          price: itemInfo.price,
        });
        this.subtotal += itemInfo.price;
      } else {
        checkItemInArray.quantity++;
        this.subtotal += itemInfo.price;
      }
    };

    this.removeFromCart = function(itemInfo) {
      this.subtotal -= itemInfo.price * itemInfo
      .quantity;
      console.log(itemInfo.price);
      console.log(itemInfo.quantity);
      var indexOfItem;
      for (var i = 0; i < this.cartItems.length; i++) {
        if (this.cartItems[i].name === itemInfo.name) {
          indexOfItem = i;
          break;
        }
      };
      console.log(indexOfItem);
      this.cartItems.splice(indexOfItem, 1);
    };

  });

  app.controller('CatologCtrl', function() {
    this.cameras = [
      {id: 1,name: 'Nikon D3100 DSLR',image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',rating: 4,price: 369.99,onSale: true},
      {id: 2,name: 'Canon EOS 70D',image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',rating: 2,price: 1099.0,onSale: false},
      {id: 3,name: 'Nikon D810A',image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',rating: 3,price: 3796.95,onSale: true}
    ];

    this.filterText = '';
    this.sort = 'name';
  });

})();
