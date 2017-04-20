const express = require('express'),
    path = require('path'),
    serveStatic = require('serve-static');

app = express()
app.use(serveStatic(__dirname))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port);
console.log(__dirname)
