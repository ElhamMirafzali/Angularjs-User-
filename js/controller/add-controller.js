/**
 * Created by Elham on 7/18/2017.
 */
app.controller('AddCntrl', ['$scope','$uibModal',function ($scope, $uibModal) {
    $scope.open = function () {
        var modalInstance = $uibModal.open({
           //controller: 'UsersAppCntrl',
            scope: $scope,
            controller: 'PopupCont',
            templateUrl: 'partials/add-user-form.html'
        });
    }
}]);
