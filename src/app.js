define([
	'angular',
	'angularResource',
	'controller/controllers',
	'filter/filters',
	'factory/factories',
    'directive/directives',
    'angularMocks'
	], function(angular) {

    var module = angular.module('myApp',[
    	'controllers',
    	'filters',
    	'factories',
        'directives',
    	'ngResource'
    ]);

});
