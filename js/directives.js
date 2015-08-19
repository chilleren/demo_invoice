'use strict';

/* Directives */

var directives = angular.module('directives', []);

directives.directive('address', function() {
  return {
    scope: {
      address: "=addr"
    },
    templateUrl: "js/partials/address.html"
  }
});

directives.directive('invoiceData', function() {
  return {
    templateUrl: "js/partials/invoice-data.html"
  }
});