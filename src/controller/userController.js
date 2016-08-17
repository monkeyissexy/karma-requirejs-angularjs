define([],function(){

	return ['$scope','UserFactory',
		function($scope, UserFactory){
			$scope.text = 'hello';
			$scope.users = UserFactory.query();
		}
	];	

});