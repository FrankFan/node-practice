var connect = require('connect');

var my_data = {
	'fruit': 'apple',
	'number': '555-1212',
	'color': 'purple'
};

var app = connect()
	.use(function(req, res) {
		res.setHeader('Content-Type', 'application/json');
		res.setHeader('Server', 'X');
		res.end(JSON.stringify(my_data));
	})
	.listen(3003, function() {
		console.log('running...');
	});