var express = require('express');
var app = express();
var path = require('path');
var cors = require('cors');
var formidable = require('formidable');
var fs = require('fs');

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


app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/public/partials/add-user-form.html'));

});

app.post('/upload', function(req, res){

  var form = new formidable.IncomingForm();

  form.multiples = true;

  form.uploadDir = path.join(__dirname, 'public/img');

  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  form.on('end', function() {
    res.end('success');
  });

  form.parse(req);

});



var server = app.listen(3000, function(){
  console.log('Server listening on port 3000');
});
