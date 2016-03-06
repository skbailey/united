var request = require('request');
var express = require('express');
var router = express.Router();

var baseRequest = request.defaults({
  baseUrl: 'http://localhost:49567/',
  headers: {
    'Accept': 'application/json',
    'Cache-Control': 'no-cache'
  },
  json: true
})

/* GET home page. */
router.get('/service-types', function(req, res, next) {
  baseRequest({ url: '/api/service-types' }, function(error, response, body){
    res.json(body);
  });
});

router.post('/assistance-requests', function(req, res, next) {
  baseRequest.post({
      url: '/api/assistance-requests',
      body: req.body
    }, 
    function(error, response, body){
      res.status(response.statusCode).json(body);
    });
});

module.exports = router;
