'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('InvoiceCtrl', ['$scope', function($scope) {
  $scope.invoiceNumber = 10001;
  $scope.invoiceDate = new Date();
  $scope.subtotal = 0;

  $scope.lineItems = [
    {name: "Popcorn", description: "Genuine gourmet popping corn", quantity: 3, price: "9.99"},
    {name: "Bags", description: "Large popcorn bags", quantity: 10, price: "3"}
  ];

  $scope.taxes = [
    {type: "Sales", rate: .09},
    {type: "VAT", rate: .12}
  ];

  $scope.discounts = [10, 5];

  function sumLineItems() {
    $scope.subtotal = 0;

    for (var i = 0; i < $scope.lineItems.length; i++) {
      var lineItem = $scope.lineItems[i];
      $scope.subtotal += lineItem.price * lineItem.quantity;
    }
  }

  sumLineItems();

  $scope.addLineItem = function () {
    $scope.lineItems.push(
    {name: "New Item", description: "Details go here", quantity: 2, price: "10"});
    sumLineItems();
  }

  $scope.total = function () {
    var taxTotal = 0;
    var discountTotal = 0;

    for (var i = 0; i < $scope.taxes.length; i++) {
      taxTotal += $scope.taxes[i].rate * $scope.subtotal;
    }

    for (var i = 0; i < $scope.discounts.length; i++) {
      discountTotal += $scope.discounts[i];
    }

    return $scope.subtotal + taxTotal - discountTotal;
  }

  $scope.highlight = function () {
    $(".highlight").removeClass("highlight");
    $(event.currentTarget).addClass("highlight");
  }
}]);

controllers.controller('AddressCtrl', ['$scope', function($scope) {
  $scope.address = {
    // companyName: '',
    // street: '',
    // city: '',
    // state: '',
    // zip: ''
  }
}]);

controllers.controller('LineItemListCtrl', ['$scope', function($scope) {
}]);