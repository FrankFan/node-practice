const http = require('http');
const url = require('url');

const PORT = 9000;

function start(route, handle) {
  function onRequest(request, response) {
    let postData = '';
    const pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' revieved.');

    request.setEncoding('utf8');

    request.addListener('data', function(postDataChunk) {
      postData += postDataChunk;
      console.log('Recieved POST data trunk ' + postDataChunk);
    });

    request.addListener('end', function() {
      route(handle, pathname, response, postData);
    });

  }

  http.createServer(onRequest).listen(PORT);
  console.log('Server has started. visit http://localhost:' + PORT);
}

exports.start = start;
