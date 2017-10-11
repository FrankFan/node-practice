const querystring = require('querystring');
const fs = require('fs');
const formidable = require('formidable');
const util = require('util');


function start(response) {
  console.log("Request handler 'start' was called.");

  const body = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <title>demo</title>
</head>
<body>
  <form action="/upload" enctype="multipart/form-data" method="post">
    <input type="file" name="uploadMe" multiple="multiple" /> <br/>
    <input type="submit" value="Upload file" />
  </form>
</body>
</html>
`;

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(body);
  response.end();
}

function upload(response, request) {
  console.log("Request handler 'upload' was called.");

  const form = new formidable.IncomingForm();
  console.log('about to parse ... ');
  if (request.url == '/upload' && request.method.toLowerCase() == 'post') {
    form.parse(request, function (error, fields, files) {
      if (error) {
        response.end('error ' + error);
      } else {
        console.log('parse done !');
        console.log(util.inspect({fields: fields, files: files}));
        
        fs.renameSync(files.uploadMe.path, '/tmp/test.png');
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write('received imges: <br/>');
        response.write('<img src="/show" />');
        response.end();
      }
    });
  }
  
}

function show(response, postData) {
  console.log("Request handler 'show' was called.");

  fs.readFile('/tmp/test.png', 'binary', function (error, file) {
    if (error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write(error + '\n');
      response.end();
    }else {
      response.writeHead(200, {'Content-Type': 'image/png'});
      response.write(file, 'binary');
      response.end();
    }
  });

}

exports.start = start;
exports.upload = upload;
exports.show = show;
