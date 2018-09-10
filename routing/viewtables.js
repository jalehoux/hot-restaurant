var express = require('express')
var path = require('path')
var tablesroute = express.Router();

tablesroute.get('/tables', function(req, res){
    res.sendFile(path.join(__dirname, '..', '../public/tables.html'));
  });
  
module.exports = tablesroute;