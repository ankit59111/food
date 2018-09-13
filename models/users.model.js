const mongoose = require("mongoose");
const database = require("../config/database")();
module.exports = function () {
    //const {username,password,email}=req.body
    let userSchema = mongoose.Schema({
        username: String,
        password:String,
        email:String

    })
    let userModel = mongoose.model("user_model",userSchema);
    return userModel;
}