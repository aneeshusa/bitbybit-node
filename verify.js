var http = require("http");
var processPost = require("./processPost.js");

function start() {
    function onRequest(request, response) {
        console.log("Request Received");
        if (request.method == "POST") {
            processPost.processPost(request, response, function() {
                console.log(response.post);
                console.log("POST Request Received");
                response.writeHead(200, {"Content-Type": "text/plain"});
                response.write("Thanks for the POST request!");
                response.end();
            }
            );
        } else {
            console.log("Non Post Request Received");
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.write("Next time, trust your POST to snail mail!");
            response.end();
        }   
    }

    http.createServer(onRequest).listen(8888, "127.0.0.1");
    console.log("Question answer verification server started.");
}

exports.start = start
