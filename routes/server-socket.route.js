module.exports = function (io,app) {
    const serverSocket = require('../controller/server_socket.controller');
    const userSocket = require("../controller/socket_users.controller");
    serverSocket(io);


    app.route('/connectedusers').post(userSocket.render);


}