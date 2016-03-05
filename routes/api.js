var request = require('request');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/service-types', function(req, res, next) {
  request('http://localhost:49567/api/service-types', function(error, response, body){
    res.json(JSON.parse(body));
  });
});

module.exports = router;
