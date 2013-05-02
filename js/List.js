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
		store: {}
	}

	self.build = function()
	{
		_.extend(priv.config, config);
	}

	self.build();
	return self;
}
