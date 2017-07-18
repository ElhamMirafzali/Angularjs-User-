/**
 * Created by Elham on 7/18/2017.
 */

app.controller('EditCntrl', ['$scope','$uibModal',function ($scope, $uibModal) {
    $scope.username = 'hello';

    $scope.open = function () {
        var modalInstance = $uibModal.open({
            scope: $scope,
            controller: 'PopupCont',
            templateUrl: 'partials/editForm.html',

        });
    }
}]);

app.controller('PopupCont', ['$scope','$uibModalInstance', '$rootScope', function ($scope, $uibModalInstance) {
    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);