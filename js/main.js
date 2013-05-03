var appDebug = {};

(function ($)
{
	"use strict";

	var app = {};

	app.remoteServerURL = 'http://diagapp.dis.uniroma1.it/';
	app.remoteApiURL = app.remoteServerURL + 'opendiag/';

	app.stores = {
		demos: Store({
			url: app.remoteApiURL + 'demo/',
			name: 'Demos'
		}),

		news: Store({
			url: app.remoteApiURL + 'news/',
			name: 'News',
			property: 'news',
			sort: function (a, b)
			{
				a = new Date(a.createdOn);
				b = new Date(b.createdOn);
				return a > b ? -1 : a < b ? 1 : 0;
			}
		}),

		talks: Store({
			url: app.remoteApiURL + 'talk/',
			name: 'Talks',
			property: 'talks'
		}),

		speakers: Store({
			url: app.remoteApiURL + 'speakers/',
			name: 'Speakers',
			property: 'speakers'
		})
	};

	// Lists
	app.lists = {
		news: List({ store: app.stores.news, selector: '#news-list' })
	};

	// Listeners
	app.stores.news.on('load', function ()
	{
		console.log('Going to render');
		app.lists.news.render();
	});

	// Loading stores
	_.each(app.stores, function (e)
	{
		e.load();
	});

	appDebug = app; // Debug @todo remove
})(jQuery);