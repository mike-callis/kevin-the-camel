const express = require('express');
//const app = express();
const http = require('http');
var fs = require('fs')

var port = process.env.port || 3000;

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    myReadStream.pipe(res)
});


server.listen(port, function(){
    console.log('Node.js Server: listening on port ' + port);
});