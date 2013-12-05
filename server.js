var io = require('socket.io').listen(3000);

io.sockets.on('connection', function(socket){
  console.log('conneted');
  socket.json.emit('push', 'data');
  socket.on('send', function(msg){
    console.log(msg);
  });
});
