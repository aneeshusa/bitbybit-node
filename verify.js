var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request Received");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World!");
        response.end();
    }

    http.createServer(onRequest).listen(8888, "127.0.0.1");
    console.log("Question answer verification server started.");
}

exports.start = start
