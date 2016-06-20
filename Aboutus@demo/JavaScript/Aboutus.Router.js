/*
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Aboutus
define(
	'Aboutus.Router'
,	[
		'Aboutus.View'
	,	'Backbone'
	]
,	function (
	 	AboutusView
	,	Backbone
	)
{
	'use strict';

	// @lass Aboutus.Router @extends Backbone.Router
	return Backbone.Router.extend({

		routes: {
			'aboutus' : 'aboutusPage'
		}

	,	initialize: function (Application)
		{
			this.application = Application;
		}

		// @method homePage dispatch the 'go to aboutus page' route
	,	aboutusPage: function()
		{
			var view = new AboutusView({application: this.application});
			view.showContent();
		}
	});
});