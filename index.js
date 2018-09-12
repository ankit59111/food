const express = require('./config/express');
const app =express();

const port = process.env.PORT || 7000;
app.listen(port,()=>{
    console.log('working like a charm at port ',port);
})
module.exports = app;