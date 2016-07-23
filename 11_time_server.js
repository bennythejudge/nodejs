var strftime = require('strftime') // not required in browsers
var net = require('net');
var port = process.argv[2];

var server = net.createServer(function (socket){
  socket.end(strftime('%Y-%m-%d %H:%M\n'));
});

// console.log("port: " + port);
server.listen(port);
