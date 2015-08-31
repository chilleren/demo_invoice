'use strict';

angular.module('controllers.discount', ['ui.bootstrap'])

.controller('DiscountCtrl', ['$scope', '$modal', function($scope, $modal) {


  $scope.mouseOver = function () {
    $(event.currentTarget).addClass("highlight");
  }

  $scope.mouseOut = function () {
    $(event.currentTarget).removeClass("highlight");
  }

  $scope.edit = function () {
    $modal.open({
      templateUrl: '/js/partials/modal-discount.html',
      scope: $scope,
      controller: function ($scope, $modalInstance) {
        $scope.discountCopy = angular.copy($scope.discount);

        $scope.save = function (discountCopy) {
          $scope.discount.amount = +discountCopy.amount;
          $modalInstance.dismiss();
          console.log($scope.$parent.discounts);
        }

        $scope.deleteDiscount = function () {
          var indexToDelete = $scope.$parent.discounts.indexOf($scope.discount);
          if (indexToDelete !== -1) {
            $scope.$parent.discounts.splice(indexToDelete, 1);
          }
        }
      }
    });
  }

}]);