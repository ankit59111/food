const express = require('express');
const body_parser = require('body-parser');

module.exports = function(){
    const app = express();

    app.use(body_parser.json())
    app.use(body_parser.urlencoded({extended:true}));
    require('./../routes/index.route')(app);
    return app;


}