http = require("http");

function verify(response) {
    var tests = require("./" + response.post.question_id + ".js")
    var passed = false;
    for (var i = 0; passed && i < tests.length; i++) {
        try {
            passed = eval(response.answer + "\n" + tests[i]);
            console.log("No exception thrown: " + String(passed));
        } catch (e) {
            passed = false;
            console.log(String(passed));
        }
    }
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write('{"passed": "' + String(passed) + '"}');
    response.end();
}

exports.verify = verify 
