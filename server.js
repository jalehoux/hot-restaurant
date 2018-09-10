const express = require('express')
const app = express()

app.use(express.static('app/public'))

var port = 3000;

app.listen(port, () => console.log('Example app listening on port 3000!'))