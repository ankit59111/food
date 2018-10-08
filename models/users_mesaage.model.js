const mongoose = require("mongoose");

let messageSchema = mongoose.schema({
    message:String,
    to:String,
    sender_id:String
})

module.export = mongoose.model("users_messages",messageSchema);