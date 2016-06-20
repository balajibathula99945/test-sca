/*
	© 2015 NetSuite Inc.
	User may not copy, modify, distribute, or re-bundle or otherwise make available this code;
	provided, however, if you are an authorized user with a NetSuite account or log-in, you
	may use this code subject to the terms that govern your access and use.
*/

//@module Home
define(
	'Aboutus.View'
,	[
		'SC.Configuration'
	,	'aboutus.tpl'

	,	'Backbone'
	,	'jQuery'
	,	'underscore'
	,	'Utils'
	]
,	function (
		Configuration
	,	aboutus_tpl

	,	Backbone
	,	jQuery
	,	_
	,	Utils
	)
{
	'use strict';

	//@module Home.View @extends Backbone.View
	return Backbone.View.extend({

		template: aboutus_tpl

	,	title: _('About us').translate()

	,	page_header: _('About us').translate()

	,	initialize: function ()
		{

		}
		,
		getBreadcrumbPages: function ()
		{
			var breadcrumb = [];
			breadcrumb.push({
			href: '#'
		,	text: _('About us').translate()
			});
		return breadcrumb;
		}
		});
});
