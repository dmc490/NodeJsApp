var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



var books = require('./routes/books');
var genres = require('./routes/genres');

app.use(bodyParser.json());
app.use('/',books);
app.use('/',genres);


/*mongoose.connect('mongodb://localhost/bookstore');

var db = mongoose.connection;
db.on('close', function() {
  console.log("closed DB");
  dbAvailable = false;
});*/

// Handler in case Mongo  goes down
app.use(function(req, res, next) {

  // We lost connection!
  if (!mongoose.connection.readyState) {
    console.log("reconnecting");
    // Reconnect if we can
    mongoose.connect('mongodb://localhost/bookstore');
    //res.status(503);
    if (!mongoose.connection.readyState) {
      throw new Error('Mongo not available');
    }
  }
  next();

});







app.get('/', function(req,res){
  res.send('hello aworld');
});


app.listen(3000);
console.log('running port');