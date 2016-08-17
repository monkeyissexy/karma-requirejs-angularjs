define([
	'angular',
	'controller/userController'
],function(
	app,
	userController
){

	var module = angular.module('controllers', []);

	module.controller({
		UserController : userController
	});
	
});