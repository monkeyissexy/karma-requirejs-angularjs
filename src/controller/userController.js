define([],function(){

	return ['$scope','UserFactory',
		function($scope, UserFactory){
			$scope.text = 'hello';
			
			$scope.users = UserFactory.query();

			$scope.doSomething = function(data){
				return data + ' world';
			};

		}
	];	

});