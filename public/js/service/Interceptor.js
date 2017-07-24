/**
 * Created by Elham on 7/23/2017.
 */
app.factory('requestRejector', ['$q', function($q) {
    var requestRejector = {
        request: function(config) {
            return $q.reject('requestRejector');
        }
    };
    return requestRejector;
}]);

app.factory('requestRecoverer', ['$q', function($q) {
    var requestRecoverer = {
        requestError: function(rejectReason) {
            if (rejectReason === 'requestRejector') {
                // Recover the request
                return {
                    transformRequest: [],
                    transformResponse: [],
                    method: 'GET',
                    url: 'https://api.github.com/users/naorye/repos',
                    headers: {
                        Accept: 'application/json, text/plain, */*'
                    }
                };
            } else {
                return $q.reject(rejectReason);
            }
        }
    };
    return requestRecoverer;
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('requestRejector');
    // Removing 'requestRecoverer' will result to failed request
    $httpProvider.interceptors.push('requestRecoverer');
}]);

app.controller('ExampleController', ['$scope', '$http', function($scope, $http) {
    $scope.requestTime = '[waiting]';
    $http.get('https://api.github.com/users/naorye/repos').then(function() {
        $scope.requestStatus = 'success';
    }, function(rejectReason) {
        $scope.requestStatus = 'failure due to ' + rejectReason;
    });
}]);