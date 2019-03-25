//const express = require('express');
//const app = express();
const http = require('http');
var fs = require('fs')

var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res){
    console.log('url requested: ' + req.url);

    if (req.url === '/home' || req.url === '/'){
        res.writeHead(200, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact'){
        res.writeHead(200, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/contact.html').pipe(res);     
    } else if (req.url === '/names.json'){
        res.writeHead(200, {'content-Type': 'application/json'});
        fs.createReadStream(__dirname + '/names.json').pipe(res);               
    } else if (req.url === '/api/names'){
        var people = [{name: 'Albert', age: 37}, {name: 'Malcolm', age: 25}];
        res.writeHead(200, {'content-Type': 'application/json'});
        res.end(JSON.stringify(people));
    } else if (req.url === '/ajaxcall'){
        var data = {
            contactID: 1,
            firstName: 'Kevin',
            lastName: 'Camel',
            Age: 23
        };
        res.writeHead(200, {'content-Type': 'application/json'});
        res.end(JSON.stringify(data));
    } else {
        res.writeHead(404, {'content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/404.html').pipe(res);        
    }
});


server.listen(port, function(){
    console.log('Node.js Server: listening on port ' + port);
});
