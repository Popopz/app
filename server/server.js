const express = require('express')
const app = express();
const cors = require('cors');
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:4200",
        methods: ["GET", "POST"],
    }
});
const sockets = require('./sockets.js');
const server = require('./listen.js');
//const request = require('request');
//Define port used for the server
const PORT = 3000;
//This is the middleware, look it up later.
app.use (cors());
sockets.connect(io, PORT);
server.listen(http,PORT);

//app.post('login', require('.router/postlogin.js'));
//postlogin.js:
//module.exports(req, res);
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
    //https://mongoosejs.com/docs/
    const kittySchema = new mongoose.Schema({
        name: String
    });
    const Kitten = mongoose.model('Kitten', kittySchema);
    const silence = new Kitten({ name: 'Silence' });
    console.log(silence.name); // 'Silence'
    await silence.save();
};
