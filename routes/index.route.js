module.exports = function (app) {
   const index = require('../controller/index.controller');
   const signup = require('../controller/signup.controller');
    const login = require('../controller/login.controller');
    const path = require("path");

    app.route('/').get(index.render);
    app.route("/signup").post(signup.render);
    app.route("/login").post(login.login);

}