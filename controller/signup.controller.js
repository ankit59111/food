const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const database = require("../config/database")();
const userModel = require("../models/users.model");
const util = require("../util");


exports.render = (req, res) => {
    let {email, password, username, mobileNumber, cnfrmpassword} = req.body;
    let hashedPassword;
    if (!email && !password && !username && !mobileNumber) {
        res.status(500);
        res.send({
            msg: "failed",
            error: "please fill credentials first"
        })
    } else if (!email) {
        res.status(500)
        res.send({
            msg: "failed",
            error_msg: "email should not be empty"
        })
    } else if (!username) {
        res.status(500)
        res.send({
            msg: "failed",
            error_msg: "username should not be empty"
        })
    } else if (!mobileNumber) {
        res.status(500)
        res.send({
            msg: "failed",
            error_msg: "mobile number should not be empty"
        })
    } else if(isNaN(mobileNumber)){
        res.status(500);
        res.send({
            msg: "failed",
            error_msg: "mobile number should be number"
        })
    }else if(mobileNumber.length<10){
        res.status(500);
        res.send({
            msg: "failed",
            error_msg: "mobile number should not be less than 10"
        })
    }else if(mobileNumber.length>10){
        res.status(500);
        res.send({
            msg: "failed",
            error_msg: "mobile number should not be greater than 10"
        })
    }else if(!util.validateEmail(email)){
        res.status(500);
        res.send({
            msg: "failed",
            error_msg:"check email type"
        })
    }else if (password) {
        if (password !== cnfrmpassword) {
            res.status(500);
            res.send({
                msg: "failed",
                error_msg: "confirm password should be equal to password"
            })
        } else {
            bcrypt.genSalt(10, (err, salt) => {
                if (err) {
                    res.status(500)
                    res.send({
                        msg: "failed",
                        error_msg: "failed in generating salt for hashing password"
                    })
                } else {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) {
                            res.status(500)
                            res.send({
                                msg: "failed",
                                error_msg: "error in hashing password"
                            })
                        } else {
                            hashedPassword = hash;
                            userModel.findOne({email}, (err, user) => {
                                if (err) {
                                    res.status(500)
                                    res.send({
                                        msg: "failed",
                                        error_msg: "user model not defined"
                                    })
                                } else if (user) {
                                    res.status(500)
                                    res.send({
                                        status: "failed",
                                        msg: "email already exist"
                                    })
                                }else {

                                    mobileNumber = parseInt(mobileNumber);

                                    let user = new userModel({
                                        email,
                                        password: hashedPassword,
                                        username,
                                        mobileNumber
                                    });
                                    user.save(function (error, success) {
                                        let generated_token;
                                        if (error) {
                                            res.status(500)
                                            res.send({
                                                msg: "failed",
                                                error_msg: "credentials not saved in database"
                                            })
                                        } else {
                                            jwt.sign(
                                                {
                                                    email,
                                                    password: hashedPassword,
                                                    username
                                                }, 'fuckerstumsenahopayega',
                                                {expiresIn: '24h'},
                                                (err, token) => {
                                                    generated_token = token;
                                                    res.status(200);
                                                    res.send({
                                                        msg: "success",
                                                        token: generated_token
                                                    });
                                                }
                                            )
                                        }
                                    })
                                }
                            })

                        }
                    })
                }
            })
        }

    } else {
        res.status(500)
        res.send({
            msg: "failed",
            error_msg: "password should not be empty"
        })
    }
}