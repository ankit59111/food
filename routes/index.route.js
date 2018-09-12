module.exports = function (app) {
   const index = require('../controller/index.controller');
   const login = require('../controller/login.controller');
    app.route('/').get(index.render);
    app.route("/login").post(login.render);

}