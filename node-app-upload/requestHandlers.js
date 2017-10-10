// const exec = require('child_process').exec;

function start() {
  console.log("Request handler 'start' was called.");
  

  function sleep(milliSeconds) {
  	const startTime = new Date().getTime();
  	while	(new Date().getTime() < startTime + milliSeconds) {
  		// do noting.  just waiting.
  	}
  }

	sleep(5000);

  return 'Hello Start';
}

function upload() {
  console.log("Request handler 'upload' was called.");
  return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;
