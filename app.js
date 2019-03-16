const express = require('express');
const app = express();

var port = process.env.port || 3000;

app.get('/', function(req, res){
    res.send("Hello World - Kevin the camel here. I'm sat down !!!");
});

app.listen(port, function(){
    console.log('Node.js Server: listening on port ' + port);
});