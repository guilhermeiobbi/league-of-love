var http    = require('http');
var express = require('express');
var app     = express();
var api     = require('./routes/api');
var index   = require('./routes/index');
var PORT    = 3000;

// var routes = require('routes/index.js');
/**
 *  Server init 
 */
app.listen(PORT, function () {
  console.log('Server listening on PORT %s!', PORT);
});

/**
 * Including static folders and files
 */
app.use('/static', express.static(__dirname + '/public'));

/**
 * Routes
 */
app.use('/', index);
app.use('/api', api);