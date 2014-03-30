var server = require("./server.js");
var verify = require("./verify.js");

server.start(verify.verify);
