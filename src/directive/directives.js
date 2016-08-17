define([
	'angular',
	'directive/helloDirective'
],function(
	angular,
	helloDirective
){

	var module = angular.module('directives', []);

	module.directive({
		hello: helloDirective
	});
})