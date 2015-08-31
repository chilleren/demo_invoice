'use strict';

angular.module('controllers.lineItem', ['ui.bootstrap'])

.controller('LineItemCtrl', ['$scope', '$modal', function($scope, $modal) {

  $scope.lineItemCopy = angular.copy($scope.lineItem);

  $scope.mouseOver = function () {
    $(event.currentTarget).addClass("highlight");
  }

  $scope.mouseOut = function () {
    $(event.currentTarget).removeClass("highlight");
  }

  $scope.editLineItem = function () {
    $modal.open({
      templateUrl: '/js/partials/modal-line-item.html',
      scope: $scope,
      controller: function ($scope, $modalInstance) {
        $scope.lineItemCopy = angular.copy($scope.lineItem);

        $scope.save = function (lineItemCopy) {
          $scope.lineItem.name = lineItemCopy.name;
          $scope.lineItem.description = lineItemCopy.description;
          $scope.lineItem.price = +lineItemCopy.price;
          $scope.lineItem.quantity = +lineItemCopy.quantity;
          $modalInstance.dismiss();
        }

        $scope.deleteLine = function () {
          var indexToDelete = $scope.$parent.lineItems.indexOf($scope.lineItem);
          if (indexToDelete !== -1) {
            $scope.$parent.lineItems.splice(indexToDelete, 1);
          }
        }
      }
    });
  }

}]);