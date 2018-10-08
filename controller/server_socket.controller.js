var loggedInUserModel = require("../models/loggedInUsers.model");
module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on("userLoggedIn", function (data) {
            let user = new loggedInUserModel(data);
            user.save(function (err, success) {
                if (err) {
                    console.log(err)
                } else {
                    console.log("user saved : ")
                    console.log(data);
                }
            })
        })
        socket.on("disconnect", function () {
            loggedInUserModel.remove({socket_id:socket.id},(err,success)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("user disconnected :" + socket.id);
                }
            })
        })

        socket.on('sendMessage', function (data) {

            console.log(data);

            io.sockets.sockets[data.to].emit('receiveMessage', {message: data.message,type:"receiver",kiski:data.to});
        })

    })
}