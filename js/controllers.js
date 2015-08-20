'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('InvoiceCtrl', ['$scope', function($scope) {
  $scope.invoiceNumber = 10001;
  $scope.invoiceDate = new Date();
  $scope.invoiceTotal = 0;
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
  $scope.lineItems = [
    {name: "Popcorn", description: "Genuine gourmet popping corn", quantity: 3, price: "9.99"},
    {name: "Bags", description: "Large popcorn bags", quantity: 10, price: "3"}
  ]

  $scope.addLineItem = function () {
    $scope.lineItems.push(
    {name: "New Item", description: "Details go here", quantity: 2, price: "10"})
  }
}]);