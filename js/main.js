var appDebug = {};

(function($)
{
	var app = {};

	app.remoteServerURL = 'http://diagapp.dis.uniroma1.it/';
	app.remoteApiURL 	= app.remoteServerURL + 'opendiag/';

	app.stores = {
		demos: 		Store({ url: app.remoteApiURL + 'demo/', 		name: 'Demos'}),
		news: 		Store({ url: app.remoteApiURL + 'news/', 		name: 'News' }),
		talks: 		Store({ url: app.remoteApiURL + 'talk/', 		name: 'Talks'}),
		speakers: 	Store({ url: app.remoteApiURL + 'speakers/', 	name: 'Speakers'})
	};

	_.each(app.stores, function(e){
		console.log(e);
		e.load();
	});

	appDebug = app; // Debug @todo remove
})(jQuery);