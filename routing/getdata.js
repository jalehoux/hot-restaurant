var express = require('express')
var data = express.Router();

var reservationData = [{
    name: 'Jacob Lehoux',
    phone: '6035020920',
    email: 'jalehoux@gmail.com',
    id: 'jalehoux'
},{
    name: 'Jacob Lehoux',
    phone: '6035020920',
    email: 'jalehoux@gmail.com',
    id: 'jalehoux'
}]

var waitlistData = [{
    name: 'Jacob Lehoux',
    phone: '6035020920',
    email: 'jalehoux@gmail.com',
    id: 'jalehoux'
}]

data.post("/data",function(req,res){
    var newreserve = req.body;
    console.log(newreserve)
    // newreserve.routeName = newreserve.name.replace(/\s+/g, "").toLowerCase();
    if(reservationData.length > 5){
        waitlistData.push(newreserve)
    } else {
        reservationData.push(newreserve)
    }
})

module.exports = data