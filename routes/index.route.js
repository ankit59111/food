module.exports = function (app) {
   const index = require('../controller/index.controller');
   const signup = require('../controller/signup.controller');
    app.route('/').get(index.render);
    app.route("/signup").post(signup.render);

}