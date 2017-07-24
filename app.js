var express = require('express');
var app = express();
var path = require('path');
var formidable = require('formidable');
var fs = require('fs');
var middleware = require('middleware');
var cors = require('cors');
var router = express.Router();
//var stack = middleware();

var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, API_USER,API_TOKEN");
        res.header("Access-Control-Allow-Headers",'Content-Type');
    }
};


app.use(cors({origin: 'http://localhost:3000'}));

app.use(express.static('public', options));
app.use(express.static(path.join(__dirname, 'public')));

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, API_USER,API_TOKEN");
    res.header("Access-Control-Allow-Headers",'Content-Type');
    next();
});

// $scope.user = UserAuthService.getUser();
//
// authService.loginConfirmed($scope.user, function(config){
//     config.headers["API_USER"] = $scope.user.guid;
//     config.headers['API_TOKEN'] = $scope.user.api_token;
//     return config;
// });



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/partials/add-user-form.html'));

});




app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, 'public/img');

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});




var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
