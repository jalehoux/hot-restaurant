var express = require('express')
var path = require('path')
var reserveroute = express.Router();

reserveroute.get('/reserve', function(req, res){
    res.sendFile(path.join(__dirname, '..', '../public/reserve.html'));
  });
  
module.exports = reserveroute;