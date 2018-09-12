const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/food');

console.log(mongoose.connection);
let db;
module.exports = () => {

    if(db === undefined){
        db = mongoose.connection;
        db.on("error",()=>{
            console.log("error in connection with database")
        });
        db.on("open",()=>{
            console.log("succesfully connected");
        })
    }
    return db;

};

