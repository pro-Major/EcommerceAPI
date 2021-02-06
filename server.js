require("./Database/db");
const http = require('http');

const { env } = require('process');
const app = require('./index');
const port = process.env.PORT || 3200;
const server = http.createServer(app);
server.listen(port, ()=> {
    console.log(`Server started at port no ${port}`)
} )
