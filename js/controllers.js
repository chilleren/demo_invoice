'use strict';

/* Controllers */

var controllers = angular.module('controllers', []);

controllers.controller('InvoiceCtrl', ['$scope', function($scope) {
  $scope.fromAddress = {
    companyName: 'from company',
    street: '',
    city: '',
    state: '',
    zip: ''
  }

  $scope.toAddress = {
    companyName: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  }
}]);