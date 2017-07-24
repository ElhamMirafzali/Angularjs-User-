
app.controller('UsersAppCntrl',  function ($scope, sharedProperties, $http) {
    $scope.newName = null;
    $scope.newImage = null;
    $scope.form = [];
    $scope.files = [];

    $scope.users = sharedProperties.users;
    $scope.currentUser = sharedProperties.currentUser;
    $scope.editing = sharedProperties.editing;

    $http({
        method : "GET",
        url : "http://testapi.ariogames.ir:8888/user/",
        header : [

        ],
        body : {}
    }).then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statustext;
        console.log(response.data.message);
        $scope.users = response.data.message;
    });

    $scope.getList = function () {
        $http({
            method : "GET",
            url : "http://testapi.ariogames.ir:8888/user/",
            header : [

            ],
            body : {}
        }).then(function(response) {
            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statustext;
            console.log(response.data.message);
            $scope.users = response.data.message;
        });
    };

    $scope.setUser = function (id) {
        for (var i = 0; i < $scope.users.length; i++) {
            var obj = $scope.users[i];
            if (obj.id == id) {
                $scope.currentUser = $scope.users[i];
                $scope.editing = $scope.users[i];
                i = $scope.users.length;
            }
        }
    };

    $scope.editUser = function (id, newName) {

        console.log(id);
        console.log(newName);
        var putREQ = {
            method: 'PUT',
            url: 'http://testapi.ariogames.ir:8888/user/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "id" : id,
                "username" : newName
            }
        };
        $http(putREQ).then(function(response){
            alert("success");
            $scope.getList();
        }, function(rejectReason){
            alert("fail");
        });

    };

    $scope.editUserImage = function (editImage) {
        $scope.editing.avatar = editImage;

    };

    $scope.deleteUser = function (id) {

        var delREQ = {
            method: 'DELETE',
            url: 'http://testapi.ariogames.ir:8888/user/',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { "id": id }
        };
        $http(delREQ).then(function(response){
            alert("success");
            $scope.getList();
            $scope.users = response.data.message;
            console.log($scope.users);

            }, function(rejectReason){
            alert("fail");
        });

        // for (var i = 0; i < $scope.users.length; i++) {
        //     var obj = $scope.users[i];
        //     if (obj.id == id) {
        //         $scope.users.splice(i, 1);
        //         i = $scope.users.length;
        //     }
        // }

    };

    $scope.addUser = function (newName,NewImage) {

        if (newName != null) {

            var postREQ = {
                method: 'POST',
                url: 'http://testapi.ariogames.ir:8888/user/',
                headers: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "username" : newName,
                    "avatar" : ''
                    // avatar: 'img/'+ NewImage
                }
            };
            $http(postREQ).then(function(response){
                alert("success");
                $scope.getList();
                $scope.users = response.data.message;
                console.log($scope.users);

            }, function(rejectReason){
                alert("fail");
            });

            window.alert(newName + " is Added!");

        } else {
            window.alert("Please Enter User Name!");
        }

        $scope.newName = null;


    };

});

