const exec = require('child_process').exec;

function start(response) {
  console.log("Request handler 'start' was called.");

  exec('find /bin', { timeout:10000, maxBuffer:20000*1024 }, function(error, stdout, stderr) {
  	response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(stdout);
    response.end();
  });


 //  function sleep(milliSeconds) {
 //  	const startTime = new Date().getTime();
 //  	while	(new Date().getTime() < startTime + milliSeconds) {
 //  		// do noting.  just waiting.
 //  	}
 //  }

	// sleep(5000);

  // return 'Hello Start';
  // return content;
}

function upload(response) {
  console.log("Request handler 'upload' was called.");
  // return 'Hello Upload';
	response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Hello Upload');
  response.end();
}

exports.start = start;
exports.upload = upload;
