//const express = require('express');
//const app = express();
const http = require('http');
var fs = require('fs')

var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);

    res.writeHead(200, {'content-Type': 'text/plain'});
    res.end('Hey Kevin !');

//    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//    myReadStream.pipe(res)
});


server.listen(port, function(){
    console.log('Node.js Server: listening on port ' + port);
});