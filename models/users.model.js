const mongoose = require("mongoose");
const database = require("../config/database")();
//const {username,password,email}=req.body
let userSchema = mongoose.Schema({
    username: String,
    password: String,
    email: String,
    mobileNumber:Number

})
module.exports = mongoose.model("user_model", userSchema);
