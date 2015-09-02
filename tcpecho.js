var net = require('net');

net.createServer(function(socket) {
  socket.on('data', function(req) {
    var data = req.toString();
	console.log(data);
	
	socket.write("HTTP/1.1 200 OK\r\nContent-Length:3\r\n\r\nbla");
  });

  socket.on('end', function () {
	console.log("end");
  }); 
}).listen(5000);

console.log("Chat server running at port 5000\n");
