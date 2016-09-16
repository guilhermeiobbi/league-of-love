const PORT    = 3000;

var express = require('express');
var app     = express();
var bodyParser = require('body-parser');

var api     = require('./routes/api');
var index   = require('./routes/index');

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
 * JSON support definitions
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/**
 * Routes
 */
app.use('/', index);
app.use('/api', api);