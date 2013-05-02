/**
 * Store.js
 *
 * Created by leonardo on 02/05/13
 */
var Store = function (config)
{
	"use strict";

	var self = {};
	var priv = {};

	priv.config = {
		url: '',
		name: 'Store',
		property: 'store',
		sort: false
	};

	priv.listeners = {};

	priv.data = [];

	self.build = function ()
	{
		_.extend(priv.config, config);
	};

	self.sort = function ()
	{
		if(priv.config.sort !== false && typeof(priv.config.sort) === "function")
		{
			priv.data.sort(priv.config.sort);
		}
	};

	self.on = function(evt, fun)
	{
		if(typeof(priv.listeners[evt]) === "undefined")
		{
			priv.listeners[evt] = [];
		}
		priv.listeners[evt].push(fun);
	}

	priv.fire = function(name, evt)
	{
		if(typeof(priv.listeners[name]) !== "undefined")
		{
			_.each(priv.listeners[name], function(f){
				f.apply(self,[evt]);
			});
		}
	}

	self.load = function()
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

				priv.fire('load', {});
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
	}

	self.build();
	return self;
};
