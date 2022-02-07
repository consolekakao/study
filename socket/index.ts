const express = require("express")();
const app = require("http").createServer(express);
const io = require("socket.io")(app);
const port = 3000;


express.get('/', (req: any, res: any)=>{
  res.sendFile(__dirname + '/index.html');
  })

io.on('connection', (socket: any) => {

  socket.on('login',(data: any) => {
    io.emit('login',data.name);
  })

  socket.on('chat',(data: any) => {
    io.emit('chat', {
      text: data.text,
      name: data.name
    })
  })

  socket.on('forceDisconnect', function() {
    socket.disconnect();
  })

  socket.on('disconnect', function() {
    console.log('user disconnected: ' + socket.name);
  });
})


app.listen(port,() => {
  console.log("server on!");
})