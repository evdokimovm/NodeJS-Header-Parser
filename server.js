var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var port = process.env.PORT || 8080;

app.get('/', function(req, res) {
	var info = {
		'ip-address': req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress || req.connection.socket.remoteAddress,
		'language': req.headers["accept-language"].split(',')[0],
		'software': req.headers['user-agent'].split(') ')[0].split(' (')[1]
	};
	res.send(info);
});

app.listen(port, function() {
	console.log('Node.js listening on port ' + port)
});
