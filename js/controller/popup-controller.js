/**
 * Created by Elham on 7/18/2017.
 */
app.controller('PopupDemoCont', ['$scope','$uibModal',function ($scope, $uibModal) {
    $scope.open = function () {
        var modalInstance = $uibModal.open({
           // controller: 'UsersAppCntrl',
            controller: 'PopupCont',
            templateUrl: 'partials/add-user-form.html'
        });
    }
}]);

app.controller('PopupCont', ['$scope','$uibModalInstance', '$rootScope', function ($scope, $uibModalInstance) {
    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    };
    $scope.newName;
    $scope.newImage;

    $scope.childmethod = function() {
        $rootScope.$emit('parent-method', {
            newName : $scope.newName
            // newImage : $scope.newImage
        });
    }
}]);