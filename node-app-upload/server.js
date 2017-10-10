const http = require('http');
const url = require('url');

const PORT = 9000;

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' revieved.');

    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });

    const content = route(handle, pathname, response);

    // response.write(content);
    // response.end();
  }

  http.createServer(onRequest).listen(PORT);
  console.log('Server has started. visit http://localhost:' + PORT);
}

exports.start = start;
