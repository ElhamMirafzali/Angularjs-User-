
app.controller('UsersAppCntrl',  function ($scope, sharedProperties) {
    $scope.newName = null;
    $scope.newImage = null;
    $scope.form = [];
    $scope.files = [];

    $scope.users = sharedProperties.users;
    $scope.currentUser = sharedProperties.currentUser;
    $scope.editing = sharedProperties.editing;

    $scope.setUser = function (id) {
        for (var i = 0; i < $scope.users.length; i++) {
            var obj = $scope.users[i];
            if (obj.id == id) {
                $scope.currentUser = $scope.users[i];
                i = $scope.users.length;
            }

        }
    };

    $scope.editUser = function (id) {
        for (var i = 0; i < $scope.users.length; i++) {
            var obj = $scope.users[i];
            if (obj.id == id) {
                $scope.editing = $scope.users[i];
                i = $scope.users.length;
            }
        }

    };

    $scope.editUserImage = function (editImage) {
        $scope.editing.image = editImage;

    };

    $scope.deleteUser = function (id) {

        for (var i = 0; i < $scope.users.length; i++) {
            var obj = $scope.users[i];
            if (obj.id == id) {
                $scope.users.splice(i, 1);
                i = $scope.users.length;
            }
        }

        $scope.editing = null;

    };



    $scope.addUser = function (newName,NewImage) {

        if (newName != null) {
            $scope.users.push({
                id: $scope.users.length + 1,
                name: newName,
                image: 'img/'+ NewImage
            });

            $scope.adding = null;
            window.alert(newName + " is Added!");

        } else {
            window.alert("Please Enter User Name!");
        }

        $scope.newName = null;
        $scope.editing = null;

    };

});

