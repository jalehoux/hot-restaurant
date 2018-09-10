// Dependencies
const express = require('express');
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('app/public'))

// Sets up the Express App to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Starts the server to begiin listening
app.listen(port, () => console.log('Example app listening on port 3000!'))