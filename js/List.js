/**
 * List.js
 *
 * Created by leonardo on 02/05/13
 */
var List = function(config)
{
	"use strict";
	var self = {};
	var priv = {};

	priv.config = {
		store: {},
		selector: '#list'
	};

	priv.templates = {
		news: twig({ data: '<div class="news-item">' +
			'<h2>{{ title }}</h2>' +
			'<p>{{ text }}</p>' +
			'<span class="date">{ createdOn:date("j F") }</span>' +
			'</div><div class="news-separator"></div>'})
	};

	self.build = function()
	{
		_.extend(priv.config, config);
	};

	self.render = function()
	{
		var html = '';

		_.each(priv.config.store.getData(), function(item){
			html = html + priv.templates.news.render(item);
		});

		$(priv.config.selector).html("<h2>Ciao:</h2>" + html);
	};

	self.build();
	return self;
}
