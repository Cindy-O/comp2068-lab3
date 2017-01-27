//dependencies
let http = require('http');
var url = require('url');
var connect = require('connect');


//create a new instance of a connect application
var app = connect();

//calculator function
var calculator = function(req, res, next) {
  //get the whole querystring (parameter list)
  var qs = url.parse(req.url, true).query;
  var method = qs.method;
  var x = qs.x;
  var y = qs.y;

  //determine user's "method" input
  if (method == 'add') {
    //add x & y
    var result = parseInt(x) + parseInt(y);
    res.write(x + " + " + y + " = " + result);
  }
  else if (method == 'subtract') {
    //subtract x & y
    var result = parseInt(x) - parseInt(y);
    res.write(x + " - " + y + " = " + result);
  }
  else if (method == 'multiply') {
    //multiply x & y
    var result = parseInt(x) * parseInt(y);
    res.write(x + " * " + y + " = " + result);
  }
  else if (method == 'divide') {
    //divide x & y
    var result = parseInt(x) / parseInt(y);
    res.write(x + " / " + y + " = " + result);
  } else {
    //show an error
    res.write("You have entered an invalid method.");
  };

  res.end();
};

//route the url the correct function
app.use('/lab3', calculator);


//start the server on port 3000
app.listen(3000);
console.log('Connect running on port 3000');
