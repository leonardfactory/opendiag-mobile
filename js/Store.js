/**
 * Store.js
 *
 * Created by leonardo on 02/05/13
 */
var Store = {};
(function (Objee, Core, twig, _)
{
	"use strict";

	Store = function (config)
	{
		var self = Objee().extend(Core.Listener);
		console.log(self);
		var priv = {};

		priv.config = {
			url: '',
			name: 'Store',
			property: 'store',
			sort: false
		};

		priv.data = [];

		self.build = function ()
		{
			_.extend(priv.config, config);
		};

		self.sort = function ()
		{
			if (priv.config.sort !== false && typeof(priv.config.sort) === "function") {
				priv.data.sort(priv.config.sort);
			}
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
					priv.data = data[priv.config.property];
					self.sort();

					self.fire('load', {});
				},
				error: function (e)
				{
					console.log(e);
				}
			});
		};

		self.getData = function ()
		{
			return priv.data;
		};

		self.build();
		return self;
	};

})(Objee, Core, twig, _);
