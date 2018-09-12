const mongoose = require("mongoose");
const database = require("../config/database")();
const loginModel = require("../models/login.model")();
exports.render = (req, res)=> {
    const {email,password,username} =  req.body;

    let login = new loginModel({email,password,username});
    login.save(function (error,success) {
        if(error)
            console.log(error);
        console.log(req.body);
        res.send("saved suucesfully \n ")

    })
}