module.exports = {
    connect: function(io, PORT){
        io.on('connection', (socket) => {
            //socket.join("some room");
            console.log('sockets.js user connection on port ' + PORT + ' : ' + socket.id);
            socket.on('message', (message)=>{
                io.emit('message', message);
            })
        });
    }
}