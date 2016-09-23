var express = require('express');
var router  = express.Router();
const pug   = require('pug');

const compiledFunction = pug.compileFile('./views/about.pug');
/**
 * GET about page
 */
router.get('/', function (req, res)
{
    res.render('about.pug');
});

module.exports = router;
