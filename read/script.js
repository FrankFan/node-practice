/*
* $ node script.js --times 8
* $ node script.js --times 8 test
* $ node script.js test --times 3
*
**/

var argv = require('optimist').argv;

for (var i = 0; i < argv.times; i++) {
	console.log(argv._[0] + ' on loop number ' + (i + 1));
}
