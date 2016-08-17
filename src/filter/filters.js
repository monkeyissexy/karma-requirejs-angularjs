define([
	'angular',
	'filter/rmbFilter'
], function(
	angular,
	rmbFilter
){

	var module = angular.module('filters', []);

	module.filter({
		rmb : rmbFilter
	});

  	return module;
   
});