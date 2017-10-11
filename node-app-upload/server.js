const http = require('http');
const url = require('url');

const PORT = 9000;

function start(route, handle) {
  function onRequest(request, response) {
    const pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' revieved.');
    route(handle, pathname, response, request);
  }

  http.createServer(onRequest).listen(PORT);
  console.log('Server has started. visit http://localhost:' + PORT);
}

exports.start = start;
