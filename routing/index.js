var express = require('express')
var path = require('path')
var indexroute = express.Router();

indexroute.get('/index', function(req, res){
    res.sendFile(path.join(__dirname, '..', './public/index.html'));
  });
  
module.exports = indexroute;