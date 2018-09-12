module.exports = function (app) {
   const index = require('../controller/index.controller');
   const login = require('../controller/login.controller');
    app.get('/',index.render);
    app.post("/login",login.render);

}