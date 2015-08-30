'use strict';

angular.module('controllers.invoice', ['ui.bootstrap'])

.controller('InvoiceCtrl', ['$scope', '$modal', function($scope, $modal) {

  $scope.invoiceNumber = 10001;
  $scope.invoiceDate = new Date();
  $scope.subtotal = 0;
  $scope.notes = "Terms, conditions and notes for the client go here";

  $scope.lineItems = [
    {name: "Popcorn", description: "Genuine gourmet popping corn", quantity: 3, price: 9.99},
    {name: "Bags", description: "Large popcorn bags", quantity: 10, price: 3.95}
  ];

  $scope.taxes = [
    {type: "Sales", rate: .09},
    {type: "VAT", rate: .12}
  ];

  $scope.discounts = [{amount: 10}, {amount: 5}];

  $scope.$watch('lineItems', function () {
    sumLineItems();
  }, true);

  function sumLineItems() {
    $scope.subtotal = 0;

    for (var i = 0; i < $scope.lineItems.length; i++) {
      var lineItem = $scope.lineItems[i];
      $scope.subtotal += lineItem.price * lineItem.quantity;
    }
  }

  sumLineItems();

  $scope.addLineItem = function () {
    $modal.open({
      templateUrl: '/js/partials/modal-line-item.html',
      scope: $scope,
      controller: function ($scope, $modalInstance) {
        $scope.lineItemCopy = {name: "New Item", description: "Details go here", quantity: 2, price: "10"};

        $scope.save = function (lineItemCopy) {
          $scope.lineItems.push($scope.lineItemCopy)
          $modalInstance.dismiss();
        }

        $scope.deleteLine = function () {
          $modalInstance.dismiss();
        }
      }
    });
  }

  $scope.addTax = function () {
    $modal.open({
      templateUrl: '/js/partials/modal-tax.html',
      scope: $scope,
      controller: function ($scope, $modalInstance) {
        $scope.taxCopy = {type: "new tax", rate: 0.15};

        $scope.save = function (taxCopy) {
          $scope.taxes.push($scope.taxCopy)
          $modalInstance.dismiss();
        }

        $scope.deleteTax = function () {
          $modalInstance.dismiss();
        }
      }
    });
  }

  $scope.addDiscount = function () {
    $modal.open({
      templateUrl: '/js/partials/modal-discount.html',
      scope: $scope,
      controller: function ($scope, $modalInstance) {
        $scope.discountCopy = {amount: 10};

        $scope.save = function (discountCopy) {
          $scope.discounts.push($scope.discountCopy);
          $modalInstance.dismiss();
        }

        $scope.deleteDiscount = function () {
          $modalInstance.dismiss();
        }
      }
    });
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