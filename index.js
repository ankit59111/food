const server = require('./config/express')();
const port = process.env.PORT || 7000;
server.listen(port, () => {
    console.log('working like a charm at port ', port);
})
