const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    let token = req.headers["x-access-token"];
    console.log("A")
    console.log(token);
    if (token) {
        jwt.verify(token, "fuckerstumsenahopayega", (err, reslt) => {

            if (err) {
                console.log("invalid token")
                res.send({
                    msg: "falied",
                    err_msg: "invalid token"
                })
            }
            else{
                console.log(reslt)
                next();
            }
        })
    }else{
        res.send({
            msg:"no tokens"
        })
    }
}