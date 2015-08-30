'use strict';

angular.module('controllers.lineItem', ['ui.bootstrap'])

.controller('LineItemCtrl', ['$scope', '$modal', function($scope, $modal) {

  $scope.mouseOver = function () {
    $(event.currentTarget).addClass("highlight");
  }

  $scope.mouseOut = function () {
    $(event.currentTarget).removeClass("highlight");
  }

  $scope.save = function () {
    console.log('save');
    console.log($scope.lineItem);
  }

  $scope.deleteLine = function () {
    console.log('save');
    console.log($scope.lineItem);
  }

  $scope.editLineItem = function () {
    $modal.open({
        templateUrl: 'js/partials/modal-line-item.html',
        scope: $scope
        // controller: function ($scope, $modalInstance, $log, user) {
        //     $scope.user = user;
        //     $scope.submit = function () {
        //         $log.log('Submiting user info.');
        //         $log.log(user);
        //         $modalInstance.dismiss('cancel');
        //     }
        //     $scope.cancel = function () {
        //         $modalInstance.dismiss('cancel');
        //     };
        // },
        // resolve: {
        //     user: function () {
        //         return $scope.user;
        //     }
        // }
    });

  }

}]);