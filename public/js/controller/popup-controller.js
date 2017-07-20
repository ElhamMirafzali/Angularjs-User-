
app.controller('PopupCont', ['$scope','$uibModalInstance',  function ($scope, $uibModalInstance) {


    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
        $scope.editing = null;
    };

    $scope.uploadedFile = function (element) {
        $('.progress-bar').text('0%');
        $('.progress-bar').width('0%');
        $scope.currentFile = element.files[0];
        var reader = new FileReader();
        reader.onload = function (event) {
            $scope.image_source = event.target.result;
            $scope.$apply(function ($scope) {
                $scope.files = element.files;
            });
        };

        if($scope.editing != null){
            $scope.editing.image = $scope.image_source;
        }

        reader.readAsDataURL(element.files[0]);

    };


    $scope.calljs = function () {

        var formData = new FormData();

        $scope.selectedImage = $scope.currentFile.name ;

        formData.append('uploads[]',  $scope.currentFile, $scope.currentFile.name);
        $.ajax({
            url: '/upload',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function(data){
                console.log('upload successful!\n' + data);
            },
            xhr: function() {
                // create an XMLHttpRequest
                var xhr = new XMLHttpRequest();

                // listen to the 'progress' event
                xhr.upload.addEventListener('progress', function(evt) {

                    if (evt.lengthComputable) {
                        // calculate the percentage of upload completed
                        var percentComplete = evt.loaded / evt.total;
                        percentComplete = parseInt(percentComplete * 100);

                        // update the Bootstrap progress bar with the new percentage
                        $('.progress-bar').text(percentComplete + '%');
                        $('.progress-bar').width(percentComplete + '%');

                        // once the upload reaches 100%, set the progress bar text to done
                        if (percentComplete === 100) {
                            $('.progress-bar').html('Done');
                        }

                    }

                }, false);

                return xhr;
            }
        });

    };


}]);