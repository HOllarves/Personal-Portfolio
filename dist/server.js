const express = require('express'),
    path = require('path'),
    serveStatic = require('serve-static'),
    port = process.env.PORT || 5000

app = express();
app.use(serveStatic(__dirname));
app.listen(port);
console.log('server started ' + port);
