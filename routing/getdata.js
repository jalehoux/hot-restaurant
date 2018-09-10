var express = require('express')
var dataroute = express.Router();

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

}]

dataroute.post("/data",function(req,res){
    var newreserve = req.body;
    newreserve.routeName = newreserve.name.replace(/\s+/g, "").toLowerCase();
    if(reservationData.length > 5){
        waitlistData.push(newreserve)
    } else {
        reservationData.push(newreserve)
    }
})