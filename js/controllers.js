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