const exec = require('child_process').exec;
const querystring = require('querystring');

function start(response, psotData) {
  console.log("Request handler 'start' was called.");

  const body = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>demo</title>
</head>
<body>
  <form action="/upload" method="post">
    <textarea name="text" id="ta" cols="60" rows="20"></textarea>
    <input type="submit" value="Submit text" />
  </form>
</body>
</html>
`;

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();

  // exec('find /dev', { timeout:10000, maxBuffer:20000*1024 }, function(error, stdout, stderr) {
  // 	response.writeHead(200, {'Content-Type': 'text/plain'});
  //   response.write(stdout);
  //   response.end();
  // });
}

function upload(response, psotData) {
  console.log("Request handler 'upload' was called.");
	response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('You\'ve send: ' + querystring.parse(psotData).text);
  response.end();
}

exports.start = start;
exports.upload = upload;


