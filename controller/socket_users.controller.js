var loggedInUserModel = require("../models/loggedInUsers.model");
exports.render = function (req, res) {
    console.log(req.body)
    let user_socket_id = req.body.socket_id;
    console.log(user_socket_id);
    debugger;
    loggedInUserModel.find({}, function (err, users) {
        var userMap = [];
        users.forEach(function (user) {
            if (user.socket_id != user_socket_id) {
                userMap.push(user);
            }
            console.log(userMap.length);
        });
        res.send({userMap});
    });

}