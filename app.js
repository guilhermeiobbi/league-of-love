
/**
 * Lib imports
 */
var http       = require('http');
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

/**
 * Local apis
 */
var api   = require('./routes/api');
var index = require('./routes/index');
var about = require('./routes/about');

/**
 * JSON support definitions
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Pug 
 */
app.set('view engine', 'pug');

/**
 * Routes
 */
app.use('/', index);
app.use('/api', api);
app.use('/about', about);

/**
 * Including static folders and files
 */
app.use('/static', express.static(__dirname + '/public'));

/**
 * Server init
 */
app.set('port', (process.env.PORT || 5000));
// const PORT = 3000;

app.listen(app.get('port'), function () {
  console.log('Server listening on PORT ', app.get('port'));
});

