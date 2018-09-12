const mongoose = require("mongoose");
const database = require("../config/database")();
module.exports = function () {
    //const {username,password,email}=req.body
    let loginSchema = mongoose.Schema({
        username: String,
        password:String,
        email:String

    })
    let loginModel = mongoose.model("login_model",loginSchema);
    return loginModel;
}