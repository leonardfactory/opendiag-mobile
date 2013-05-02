/**
 * Store.js
 *
 * Created by leonardo on 02/05/13
 */
var Store = function(config)
{
	"use strict";

	var self = {};
	var priv = {};

	priv.config = {
		url: '',
		name: 'Store'
	};

	self.build = function()
	{
		_.extend(priv.config, config);
	};

	self.load = function ()
	{
		$.ajax({
			type: 'GET',
			url: priv.config.url,
			jsonpCallback: 'callBackingFor' + priv.config.name,
			contentType: "application/json",
			dataType: 'jsonp',
			success: function (data)
			{
				console.log(data);
			},
			error: function (e)
			{
				console.log(e);
			}
		});
	};

	self.build();
	return self;
};
