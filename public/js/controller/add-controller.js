/**
 * Created by Elham on 7/18/2017.
 */
app.controller('AddCntrl', ['$scope','$uibModal',function ($scope, $uibModal, sharedProperties) {
    $scope.open = function () {
        var modalInstance = $uibModal.open({
            animation: true,
            scope: $scope,
            controller: 'PopupCont',
            templateUrl: 'partials/add-user-form.html'

        });
    }
}]);
