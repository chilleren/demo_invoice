'use strict';

angular.module('controllers.invoice', [])

.controller('InvoiceCtrl', ['$scope', function($scope) {

  $scope.invoiceNumber = 10001;
  $scope.invoiceDate = new Date();
  $scope.subtotal = 0;
  $scope.notes = "Terms, conditions and notes for the client go here";

  $scope.lineItems = [
    {name: "Popcorn", description: "Genuine gourmet popping corn", quantity: 3, price: "9.99"},
    {name: "Bags", description: "Large popcorn bags", quantity: 10, price: "3"}
  ];

  $scope.taxes = [
    {type: "Sales", rate: .09},
    {type: "VAT", rate: .12}
  ];

  $scope.discounts = [{amount: 10}, {amount: 5}];

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

  $scope.addTax = function () {
    $scope.taxes.push({type: "new tax", rate: 0.1});
  }

  $scope.addDiscount = function () {
    $scope.discounts.push({amount: 10});
  }

  $scope.total = function () {
    var taxTotal = 0;
    var discountTotal = 0;

    for (var i = 0; i < $scope.taxes.length; i++) {
      taxTotal += $scope.taxes[i].rate * $scope.subtotal;
    }

    for (var i = 0; i < $scope.discounts.length; i++) {
      discountTotal += $scope.discounts[i].amount;
    }

    return $scope.subtotal + taxTotal - discountTotal;
  }

  $scope.highlight = function () {
    $(".highlight").removeClass("highlight");
    $(event.currentTarget).addClass("highlight");
  }
}]);