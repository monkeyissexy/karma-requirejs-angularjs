define(['app'], function(){
    
	describe('directive unit test', function() {
	    
	    var $compile, $scope;

	    beforeEach(module('myApp'));

	    beforeEach(inject(function(_$compile_, _$rootScope_){
			$compile = _$compile_;
			$scope = _$rootScope_.$new();;
	    }));

	    it('case: Replaces the element', function(){

			var element = angular.element('<hello></hello>');

    		element = $compile(element)($scope);

	        expect(element.html()).toBe("directive content.");
	    });
	});
});
