var page = require('webpage').create(),
	ppdf = require('./ppdf.js'),
    Routes = require('./Routes.js'),
    app = new Routes();

app.get('/', function(res){
	// serve files here
	res.send('Service is up');
});

app.post('/',function(req, res) {

	var props = {
		url: req.post.url,
		body: req.post.body
	};

	setTimeout(function() {
		var pdf = ppdf(page, props);
		console.log('Generated file: ' + pdf);

		//var template = "<html><body><a href='./" + pdf + "' download >Download Link</a></body></html>"
		//res.send(template);

		res.send('Generated file: ' + pdf)
	}, 1000);

});

app.listen(8000);
console.log('Listening on port 8000');
