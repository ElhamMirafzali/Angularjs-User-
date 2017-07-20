/**
 * Created by Elham on 7/18/2017.
 */

app.controller('EditCntrl', ['$scope','$uibModal',function ($scope, $uibModal, sharedProperties) {


    $scope.open = function () {
        var modalInstance = $uibModal.open({
            scope: $scope,
            controller: 'PopupCont',
            templateUrl: 'partials/editForm.html'

        });
    }
}]);

