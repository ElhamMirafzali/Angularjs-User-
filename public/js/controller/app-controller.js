
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
        header : [],
        body : {}
    }).then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statustext;
        console.log(response.data.message);
        $scope.users = response.data.message;
    });

    $http({
        method : "GET",
        url : "http://testapi.ariogames.ir:8888/user/token",
        header : [],
        body : {}
    }).then(function(response) {
        $scope.content = response.data;
        $scope.statuscode = response.status;
        $scope.statustext = response.statustext;
        $scope.token = response.data.message.token;
    });

    $scope.getList = function () {
        $http({
            method : "GET",
            url : "http://testapi.ariogames.ir:8888/user/",
            header : [],
            body : {}
        }).then(function(response) {
            $scope.content = response.data;
            $scope.statuscode = response.status;
            $scope.statustext = response.statustext;
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
                'Content-Type': 'application/json',
                'Authorization' : 'Token '+ $scope.token
            },
            data: {
                "id" : id,
                "username" : newName
            }
        };
        $http(putREQ).then(function(response){
            $scope.alertFunc('Edit is done!');
            $scope.getList();
        }, function(rejectReason){
            $scope.alertFunc('Request Failed! : '+rejectReason.data.message)
        });

    };

    $scope.editUserImage = function (editImage) {
        $scope.editing.avatar = editImage;

    };

    $scope.deleteUser = function (id) {
        $scope.alertFunc();
        var delREQ = {
            method: 'DELETE',
            url: 'http://testapi.ariogames.ir:8888/user/',
            headers: {
                'Content-Type': 'application/json',
                'Authorization' : 'Token '+ $scope.token
            },
            data: { "id": id }
        };
        $http(delREQ).then(function(response){
            $scope.alertFunc('User is deleted!');
            $scope.getList();
            $scope.users = response.data.message;
            }, function(rejectReason){
            $scope.alertFunc('Request Failed! : '+rejectReason.data.message)
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

        console.log(NewImage);
        if (newName != null) {

            var postREQ = {
                method: 'POST',
                url: 'http://testapi.ariogames.ir:8888/user/',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization' : 'Token '+ $scope.token
                },
                data: {
                    "username" : newName,
                    "avatar" : "img/"+NewImage
                }
            };
            $http(postREQ).then(function(response){
                $scope.alertInModal(newName + " is Added!");
                $scope.getList();
                $scope.users = response.data.message;

            }, function(rejectReason){
                $scope.alertInModal('Request Failed! : '+rejectReason.data.message)
            });
        } else {
            $scope.alertInModal("Please Enter User Name!");
        }
        $scope.newName = null;

    };

    $scope.alertFunc = function (inputText) {
        var ptag = 2;
        if (ptag == 2) {
            $('#excessPop').slideDown(500);
            $('#blackBG').show(500);
            var div = document.getElementById('excessmsg');
            div.textContent = inputText;
            ptag = 0;
        }
    };
    $scope.alertInModal = function (inputText) {
        var ptag = 2;
        if (ptag == 2) {
            $('#excessPop2').slideDown(500);
            $('#blackBG2').show(500);
            var div = document.getElementById('excessmsg2');
            div.textContent = inputText;
            ptag = 0;
        }
    };
    $('#submitExcess').click(function() {
        $('#excessPop').slideUp(500) ;
        $('#blackBG').hide(500) ;
    });

});

