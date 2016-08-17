define([
	'angular',
	'factory/userFactory'
],function(
	angular,
	userFactory
){
	var module = angular.module('factories', []);

	module.factory({
		'UserFactory': userFactory
	});

})