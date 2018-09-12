const mongoose = require("mongoose");
const database = require("../config/database")();
const loginModel = require("../models/login.model")();
exports.render = function (req, res) {
    const {email,password,username} =  req.body;
    let login = new loginModel({email:"dfsff",password:"sedewfs",username:"sdfsa"});
    login.save(function (error,success) {
        if(error)
            console.log(error);
        res.send("saved suucesfully \n ")

    })
}