'use strict';

angular.module('controllers.address', [])

.controller('AddressCtrl', ['$scope', function($scope) {
  $scope.address = {
    // companyName: '',
    // street: '',
    // city: '',
    // state: '',
    // zip: ''
  }

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


  // $(document).on("click", function (ev) {
  //   if (!$(ev.target).closest('.highlight').length) {
  //     var highlights = $(".highlight");
  //     if (highlights) {
  //       highlights.removeClass("highlight");
  //       ev.stopPropagation();
  //     }
  //   }
  // });

}]);