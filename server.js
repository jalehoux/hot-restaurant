// Dependencies
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");
const tables = require('./routing/viewtables')
const reservation = require('./routing/reserve')
const index = require('./routing/index')

// Sets up the Express App
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'))
app.use(tables)
app.use(reservation)
app.use(index)

// Sets up the Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Starts the server to begiin listening
app.listen(port, () => console.log('Example app listening on port 3000!'))