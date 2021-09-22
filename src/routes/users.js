var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if (req.query?.user % 2 === 0) {
    res.set('Cache-Control', 'public, max-age=304800, immutable')
  } else if (!req.query?.user) (
    res.set('Cache-Control', 'public, max-age=604800, immutable')
  )
  res.send('respond with a resource');
});

module.exports = router;
