'use strict';

angular.module('controllers.tax', ['ui.bootstrap'])

.controller('TaxCtrl', ['$scope', '$modal', function($scope, $modal) {


  $scope.mouseOver = function () {
    $(event.currentTarget).addClass("highlight");
  }

  $scope.mouseOut = function () {
    $(event.currentTarget).removeClass("highlight");
  }

  $scope.edit = function () {
    $modal.open({
      templateUrl: '/js/partials/modal-tax.html',
      scope: $scope,
      controller: function ($scope, $modalInstance) {
        $scope.taxCopy = angular.copy($scope.tax);

        $scope.save = function (taxCopy) {
          $scope.tax.type = taxCopy.type;
          $scope.tax.rate = +taxCopy.rate;
          $modalInstance.dismiss();
        }

        $scope.deleteTax = function () {
          var indexToDelete = $scope.$parent.taxes.indexOf($scope.tax);
          if (indexToDelete !== -1) {
            $scope.$parent.taxes.splice(indexToDelete, 1);
          }
        }
      }
    });
  }

}]);