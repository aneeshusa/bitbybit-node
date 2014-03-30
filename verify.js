http = require("http");

function verify(response) {
    console.log(response.post)
    var tests = require("./" + response.post.question_id + ".js")
    var passed = true;
    for (var i = 0; passed && i < tests.length; i++) {
        try {
            passed = eval(response.post.answer + "\n" + tests[i]);
        } catch (e) {
            passed = false;
        }
    }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('{"passed": "' + String(passed) + '"}');
    response.end();
}

exports.verify = verify 
