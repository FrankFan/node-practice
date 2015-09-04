/**
 * chatter 目录应该放在 `node_modules` 目录下再执行
 */ 


var all_sockets = null;

exports.set_sockets = function (sockets) {
	all_sockets = sockets;
};

exports.connect_chatter = function (config) {

	config.socket.emit('entrance', {message: 'Welcome to the chat room!'});
	all_sockets.emit('entrance', {message: config.username + 'is online.'});

	config.socket.on('disconnect', function () {
		all_sockets.emit('exit', {message: config.username + 'has disconnected.'});
	});

	config.socket.on('chat', function (data) {
		all_sockets.emit('chat', {message: config.username + 'says: ' + data.message});
	});
};

exports.failure = function (socket) {
	socket.emit('error', {message: 'Please log in to the chatroom.'});
};