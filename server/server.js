const express = require('express');
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
//const { createBrotliDecompress } = require('zlib');
//const { group } = require('console');
const router = express.Router();
readAllGroups = (req, res) => {
    console.log("AHHH");
    group = getGroupModel();
    group.find({}, function (err, docs) {
        if (err){
            console.log(err);
            console.log("ERR");
            return res.sendStatus(403);
        }else{
            console.log("So it works?");
            res.status(200).json(docs);
        }
    });
    console.log("BAHHH");
}

router.route('/readAllGroups').get(readAllGroups);



//https://github.com/DavideViolante/Angular-Full-Stack/blob/29c12cf7c158f691ac659736da5e003c1a3dbca8/server/controllers/base.ts#L1






app.use('/api', router);
main().catch(err => console.log(err));
mongoose.connect('mongodb://localhost:27017/test');
async function main() {
    //await mongoose.connect('mongodb://localhost:27017/test');
    //https://mongoosejs.com/docs/
    //createNewUser(user, "123","abc@com.au");
    //createNewUser(user, "1234","abc@com.au");
    //removeUser(user, "123");
    //updateUser(user,"123", "abc", "abc1.com.au");
    //createRole(user, "abc", "SuperAdmin");
    //deleteRole(user, "abc", "SuperAdmin");
    //readAllUsers(user);
    //checkNewUserName(user, "123");
    //checkNewUserName(user, "gggdfsdf");
    //createGroup(group, "NewGroup");
    //createChannel(group, "NewGroup", "newChannel")
};
function getUserModel(){
    const userSchema = new mongoose.Schema({
        userName: String,
        email: String,
        role: [String]
    });
    const user = mongoose.model('user', userSchema);
    return user;
}
function getGroupModel(){
    const groupSchema = new mongoose.Schema({
        groupName: String,
        channel: [String],
        assis: [String],
        users: [String]
    });
    var group = mongoose.model("group", groupSchema);
    return group;
}
function readAllGroups(){
    var group = getGroupModel();
    callback = (req, res) => {
        group.find({}, function (err, docs) {
            if (err){
                console.log(err);
            }else{
                res.status(200).json(docs);
            }
        });
    }
}
function createGroup(group, groupNameI){
    group.exists({groupName: groupNameI}, function (err, out) {
        if (err){
            console.log(err);
        } else {
            if (!out){
                const createNew = new group({
                    groupName: groupNameI,
                    channel: ['default'],
                    assis: ['default']
                });
                createNew.save(function (err) {
                    if (err) return handleError(err);
                    console.log("Created New Group" + groupNameI);
                });
            } else {
                console.log("A user attempted to duplicate GroupName: " + groupNameI);
            }
        }
    });
}
function createChannel(group, groupNameI, channelI){
    //user.updateOne({userName: userNameI},{$pull:{role: roleI}}).exec(function (err, out){
    group.updateOne({groupName: groupNameI},{$push:{channel: channelI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}
function removeGroup(group, groupNameI){
    group.deleteOne({groupName: groupNameI}, function (err, out){
        if (err){ console.log(out); return handleError(err);}
    });
}
function removeChannel(group, groupNameI, channelNameI){
    group.updateOne({groupName: groupNameI},{$pull:{channel: channelI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}
//It may be useful to add checks for if the User Exists, 
//but on the other hand, you can pre-emptively add users before they login.
function addUserToGroup(group, groupNameI, userNameI){
    group.updateOne({groupName: groupNameI},{$push:{users: userNameI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}
function addAssisToGroup(group, groupNameI, userNameI){
    group.updateOne({groupName: groupNameI},{$pull:{assis: userNameI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}
function removeUserToGroup(group, groupNameI, userNameI){
    group.updateOne({groupName: groupNameI},{$pull:{users: userNameI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}
function removeAssisToGroup(group, groupNameI, userNameI){
    group.updateOne({groupName: groupNameI},{$pull:{assis: userNameI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}

function readRoles(user, userNameI){
    user.findOne({userName: userNameI}, function (err, docs) {
        if (err){
            console.log(err);
        }else{
            //console.log(docs);
            console.log(docs.role);
        }
    });
}

function createRole(user, userNameI, roleI){ //works
    user.updateOne({userName: userNameI},{$push:{role: roleI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}
function deleteRole(user, userNameI, roleI){ //works
    user.updateOne({userName: userNameI},{$pull:{role: roleI}}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}


function removeUser(user, userNameI){//Works!
    user.deleteOne({userName: userNameI}, function (err, out){
        if (err){ console.log(out); return handleError(err);}
    });
}
function updateUser(user, prevUserName, userNameI, emailI){ //works
    user.updateOne({userName: prevUserName},{userName: userNameI, email: emailI}).exec(function (err, out){
        console.log(err);
        console.log(out);
    });
}
function readAllUsers(user){ //Works!
    user.find({}, function (err, docs) {
        if (err){
            console.log(err);
        }else{
            console.log(docs)
        }
    });
}
function createNewUser(user, userNameI, emailI){ //Works!
    user.exists({userName: userNameI}, function (err, out) {
        if (err){
            console.log(err);
        } else {
            if (!out){
                const createNew = new user({
                    userName: userNameI,
                    email: emailI,
                    role: ['User']
                });
                createNew.save(function (err) {
                    if (err) return handleError(err);
                    console.log("Created New User" + userNameI);
                });
            } else {
                console.log("A user attempted to duplicate UserName: " + userNameI);
            }
        }
    });
}




/*   Failed thing:
const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);

let user = [];

const messages = {
    general: [],
    random: [],
    jokes: [],
    javascript: []
};

io.on('connection', socket => {
    socket.on("join server", (username) => {
        const user = {
            username, 
            id: socket.id
        };
        users.push(user);
        io.emit("new user", users);
    });
    socket.on("join room", (roomName, cb) => {
        socket.join(roomName);
        cb(messages[roomName]);
    });

    socket.on("send message", ({content, to, sender, chatName, isChannel }) => {
        if (isChannel) {
            const payload = {
                content,
                chatName,
                sender,
            };
            socket.to(to).emit("new message", payload);
        } else {
            const payload = {
                content, 
                chatName: sender, 
                sender
            };
            socket.to(to).emit("new message", payload);
        } 
        if (messages[chatName]){
            messages[chatName].push({
                sender,
                content
            });
        }
    });
    socket.on("disconnect", () => {
        users = users.filter(u => u.id !== socket.id);
        io.emit("new user", users);
    });
});
server.listen(1337, () => console.log('server is running on port 1337'));
*/