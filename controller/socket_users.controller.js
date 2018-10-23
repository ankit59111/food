let loggedInUserModel = require("../models/loggedInUsers.model");
exports.render = function (req, res) {
    let user_socket_id = req.body.socket_id;
    loggedInUserModel.find({}, function (err, users) {
        if (err) {
            console.log(err);
            res.status(500);
            res.send({
                msg: "failed"
            })
        } else {
            let userMap = [];
            users.forEach(function (user) {
                if (user.socket_id != user_socket_id) {
                    userMap.push(user);
                }
                console.log(userMap.length);
            });
            res.status(200)
            res.send({
                msg: "success",
                userMap
            });
        }
    });

}