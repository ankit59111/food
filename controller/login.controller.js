const bcrypt = require("bcryptjs");
const util = require('../util');
const users = require("../models/users.model");
exports.login = (req, res) => {
    const {email, password} = req.body;
    if (!email) {
        res.status(400);
        res.send({
            msg: "failed",
            error_msg: "Email cannot be empty"
        })
    } else if (!util.validateEmail(email)) {
        res.status(400);
        res.send({
            msg: "failed",
            error_msg: "Email not valid"
        })
    } else {
        users.find({email}, (error, user) => {
            console.log(user);
            if (error) {
                res.status(500);
                res.send({
                    msg: "failed",
                    error_msg: "internal database error"
                })
            } else if (user.length > 1) {
                users.remove({email});
                res.status(500);
                res.send({
                    msg: "failed",
                    error_msg: "something went wrong"
                })
            } else if (user.length < 1) {
                res.status(400);
                res.send({
                    msg: 'failed',
                    error_msg: 'you are not registered, Get registered first fucker'
                })
            } else if(user.length==1) {
                let user_password = user[0].password;
                bcrypt.compare(req.body.password,user_password, (err, result) => {
                    if (err) {
                        res.status(500);
                        res.send({
                            msg: "failed",
                            error_msg: "internal server error",
                            error:err
                        })
                    } else if (result == false) {
                        res.status(400);
                        res.send({
                            msg: "failed",
                            error_msg: "password wrong"
                        })
                    } else if (result == true) {
                        res.status(200);
                        console.log(user)
                        res.send({
                            msg: "success",
                            user: {
                                email: user[0].email,
                                username: user[0].username,
                                mobileNumber: user[0].mobileNumber,
                                _id: user[0]._id
                            }
                        })
                    }
                })
            }
        })

    }
}