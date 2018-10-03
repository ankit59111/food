const express = require('express');
const cors = require("cors");
const body_parser = require('body-parser');
const app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);
module.exports = function(){
    app.use(cors());
    
    app.use(body_parser.urlencoded({extended:true}));
    require('./../routes/index.route')(app);
    require('../routes/server-socket.route')(io,app);
    return server;


}