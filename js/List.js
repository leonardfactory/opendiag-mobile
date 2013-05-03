/**
 * List.js
 *
 * Created by leonardo on 02/05/13
 */
var List = {};

(function (Objee, Core, twig, _)
{
	"use strict";

	List = function (config)
	{
		var self = Objee();
		var priv = {};

		priv.config = {
			store: {},
			selector: '#list'
		};

		priv.templates = {
			news: twig({ data: '<div class="news-item">' +
				'<h2>{{ title }}</h2>' +
				'<p>{{ text }}</p>' +
				'<span class="date">{{ createdOn:date("j F") }}</span>' +
				'</div><div class="news-separator"></div>'})
		};

		self.build = function ()
		{
			_.extend(priv.config, config);
		};

		self.render = function ()
		{
			var html = '';

			_.each(priv.config.store.getData(), function (item)
			{
				html = html + priv.templates.news.render(item);
			});

			$(priv.config.selector).html(html);
		};

		self.build();
		return self;
	};

})(Objee, Core, twig, _);
