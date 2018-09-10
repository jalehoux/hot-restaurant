var express = require('express')
var path = require('path')
var viewroute = express.Router();

viewroute.get('/view', function(req, res){
    res.sendFile(path.join(__dirname, '..', '../public/view.html'));
  });
  
module.exports = viewroute;