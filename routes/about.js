var express = require('express');
var router  = express.Router();

/**
 * GET about page
 */
router.get('/', function (req, res)
{
    res.render('about.pug', { home: '', about: 'active' });
});

module.exports = router;
