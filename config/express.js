const express = require('express');
const cors = require("cors");
let body_parser = require('body-parser');
const app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server,{'pingInterval': 25000, 'pingTimeout': 60000});
module.exports = function(){
    app.use(cors());
     app.use(body_parser.urlencoded({extended:true}));
     app.use(body_parser.json());
    require('./../routes/index.route')(app);
    require('../routes/server-socket.route')(io,app);
    return server;


}