const mongoose = require("mongoose");
require("../config/database")();
let loggedInUserSchema = mongoose.Schema({
    socket_id:String,
    email:String,
    username:String,
    mobile_number:Number
})

module.exports = mongoose.model("loggedIn_users_model", loggedInUserSchema);