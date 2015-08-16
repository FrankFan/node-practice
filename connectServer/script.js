/*
* 基于connect module创建server
* $ npm install
*/

var connect = require('connect'); 

var app = connect()
	.use(connect.static('public'))
	.use(function(req, res){
		res.end('Cound\'t find it');
	})
	.listen(3000, function() {
		console.log('runnint at http://localhost:3000/');
	});