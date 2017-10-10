var connect = require('connect');

var app = connect()
	.use(function(req, res) {
		// 必须加这一行
		res.statusCode = 403; // 500
		res.end('Forbidden');
	})
	.listen(3000, function() {
		console.log('running at http://localhost:3000/');
	});
