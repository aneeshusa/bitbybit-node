http = require("http");

function verify(response) {
    console.log(response.post);
    var x = response.post;
    var tests = require("./" + response.post.question_id)
    

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('{"passed": "True"}');
    response.end();
}

exports.verify = verify 
