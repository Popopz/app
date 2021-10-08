module.exports = {
    connect: function(io, PORT){
        io.on('connection', (socket) => {
            socket.on('disconnect', ()=>{
                users
            })
            io.emit('message','User Has joined');
            console.log('sockets.js user connection on port ' + PORT + ' : ' + socket.id);
            socket.on('message', (message)=>{
                io.emit('message', message);
            })
        });
    }
}