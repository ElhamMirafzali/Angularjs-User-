/**
 * Created by Elham on 7/17/2017.
 */

app.controller('UsersAppCntrl',  function ($scope) {

    $scope.users = [
        {
            id: 1,
            name: "Elham Mirafzali",
            image: "img/images.jpeg"
        },
        {
            id: 2,
            name: "Elham Mirafzali",
            image: 'img/index.jpeg'
        },
        {
            id: 3,
            name: "Sara Rezaei",
            image: "img/images.jpeg"
        },
        {
            id: 4,
            name: "Anahita Hosseini",
            image: "img/images.jpeg"
        },
        {
            id: 5,
            name: "Shaghayegh Akbari",
            image: "img/images.jpeg"
        },
        {
            id: 6,
            name: "Mojde Robati",
            image: "img/images.jpeg"
        },
        {
            id: 7,
            name: "Bill Gates",
            image: "img/images.jpeg"
        }
    ];

    $scope.addFormUrl = 'partials/add-user-form.html';
    $scope.editFormUrl = 'partials/editForm.html';
    $scope.currentUser = null;
    $scope.editing = null;
    $scope.adding = null;
    $scope.newName = null;
    $scope.newImage = null;
    $scope.form = [];
    $scope.files = [];



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
        $scope.adding = null;

    };

    $scope.deleteUser = function (id) {

        for (var i = 0; i < $scope.users.length; i++) {
            var obj = $scope.users[i];
            if (obj.id == id) {
                $scope.users.splice(i, 1);
                i = $scope.users.length;
            }
        }

        //
        // $(".center")[0].slick.refresh()


        //document.getElementsByClassName("slide-divs").remove();
        $scope.editing = null;
        $scope.adding = null;
    };

        $scope.enableAdding = function () {
        $scope.adding = 1;
        $scope.editing = null;

    };


    $scope.addUser = function (newName) {
        if (newName != null) {
            $scope.users.push({
                id: $scope.users.length + 1,
                name: newName,
                image: ''
            });
            window.alert(newName + " is added!");
            $scope.adding = null;
        } else {
            window.alert("please enter your name!");

        }

        $scope.newName = null;
        $scope.editing = null;

    };

    $scope.$on('parent-method', function() {
        $scope.addUser(newName);
        // profileObj contains; name, country and email from emitted event
    });


    /*
     $scope.submit = function() {
     $scope.form.image = $scope.files[0];
     $http({
     method  : 'POST',
     url     : '/upload.php',
     processData: false,
     transformRequest: function (data) {
     var formData = new FormData();
     formData.append("image", $scope.form.image);
     return formData;
     },
     data : $scope.form,
     headers: {
     'Content-Type': undefined
     }
     }).success(function(data){
     alert(data);
     });
     };
     */

    $scope.uploadedFile = function (element) {
        $scope.currentFile = element.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            $scope.image_source = event.target.result;
            $scope.$apply(function ($scope) {
                $scope.files = element.files;
            });
        };
        reader.readAsDataURL(element.files[0]);
    }



});

