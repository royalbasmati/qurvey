var express = require('express');
var middleware = require('./config/middleware.js');
var mongoose = require('mongoose');
// make mongoose use q promises
mongoose.Promise = require('q').Promise;
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);



var app = express();

//connection to mongodb
mongoose.connect('mongodb://localhost/qurvey');

// use mongo to store sessions
app.use(session({
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  secret: "please don't tell"
}));

//SET UP MIDDLEWARE + ROUTES
middleware(app, express);

var PORT = process.env.PORT || 3000;

app.listen(PORT);
console.log('qurvey is listening on ' + PORT);



module.exports = app;