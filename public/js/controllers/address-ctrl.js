'use strict';

angular.module('controllers.address', [])

.controller('AddressCtrl', ['$scope', function($scope) {
  $scope.address = {};

  $scope.focusAddress = function () {
    $(".highlight").removeClass("highlight");
    $(event.currentTarget).addClass("highlight");
  }

  $scope.blurInput = function () {
    var target = $(event.currentTarget);
    if (target.val().length === 0) {
      target.tooltip({ trigger: "manual" });
      target.tooltip("show");
    } else {
      target.tooltip("hide");
    }
  }

}]);