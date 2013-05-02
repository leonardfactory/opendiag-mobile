var appDebug = {};

(function ($)
{
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

	_.each(app.stores, function (e)
	{
		e.load();
	});

	app.lists = {
		news: List({ store: app.stores.news, selector: '#news-list' })
	};

	app.stores.news.on('load', function ()
	{
		app.lists.news.render();
	});

	appDebug = app; // Debug @todo remove
})(jQuery);