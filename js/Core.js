/**
 * Core.js
 *
 * Created by leonardo on 03/05/13
 */
var Objee = function() {};
var Core = {};

(function($) {
	"use strict";

	Objee = function()
	{
		var self = {};

		self.extend = function(parent)
		{
			_.extend(self, parent());
			return self;
		};

		return self;
	};

	/**
	 * Listener interface
	 *
	 * @constructor
	 */
	Core.Listener = function()
	{
		var self = Objee();

		self.listeners = {};

		self.on = function(evt, fun)
		{
			if(typeof(self.listeners[evt]) === "undefined")
			{
				self.listeners[evt] = [];
			}
			self.listeners[evt].push(fun);
		};

		self.fire = function(name, evt)
		{
			if(typeof(self.listeners[name]) !== "undefined")
			{
				_.each(self.listeners[name], function(f){
					f.apply(self,[evt]);
				});
			}
		};

		return self;
	};
})(jQuery);
