// Dependencies
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");


// Sets up the Express App
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))


// Sets up the Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Default Reservation Data
var reservationData = [{
    name: 'Jacob Lehoux',
    phone: '6035020920',
    email: 'jalehoux@gmail.com',
    id: 'jalehoux'
}, {
    name: 'Jake Lehoux',
    phone: '6035020921',
    email: 'jalehoux1@gmail.com',
    id: 'jalehoux1'
}]

// Data Route
app.get("/data", function (req, res) {
    return res.json(reservationData);
});

// Index Route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// Reserve Route
app.get('/reserve', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/reserve.html'));
});

// Tables Route
app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/tables.html'));
});

app.post("/data", function (req, res) {
    // req.body hosts is equal to the JSON post sent from the user. This works because of our body-parser middleware
    var newreserve = req.body;

    // Using a RegEx Pattern to remove spaces from newCharacter
    newreserve.routeName = newreserve.name.replace(/\s+/g, "").toLowerCase();

    console.log(newreserve);

    reservationData.push(newreserve);

    res.json(newreserve);
});


// Starts the server to begiin listening
app.listen(port, () => console.log('Example app listening on port 3000!'))