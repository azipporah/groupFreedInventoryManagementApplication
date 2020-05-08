const http = require('http');
http.createServer = (function(req,res) {
    res.write('Hello client');
    res.end();
}).listen(3000, function(){
    console.log('server started at port 3000');
});