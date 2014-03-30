http = require("http");
var processPost = require("./processPost.js");

function start(callback) {
    function onRequest(request, response) {
        processPost.processPost(request, response, callback);
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server started.");
}

exports.start = start
