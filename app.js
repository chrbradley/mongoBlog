var mongoose = require('Mongoose');
var express = require('Express');

// console.log(mongoose.version);

mongoose.connect('mongodb://localhost', function(err) {
  if (err) throw err;
  console.log('Connected!');

  var app = express();
  app.get('/', function(req, res) {
    res.status(200).send('hello mongoose blog');
  });
  app.listen(3000, function() {
    console.log('now listening on http://localhost:3000');
  });
  //  mongoose.disconnect();
});