//imports 
require("dotenv").config();
const Server = require("./models/server")

//my imports


//initializations
const server = new Server();

server.listen();