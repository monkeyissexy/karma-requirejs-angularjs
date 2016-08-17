define(['app'],function(){
	
	describe('filter unit test', function() {
  
  		var $filter;

	    beforeEach(module('myApp'));

		inject(function (_$filter_) {
	      	$filter = _$filter_;
	    });

	    it('case: test add unit', inject(function($filter) {
	          expect($filter('rmb')('123')).toEqual('123 元');
	    }));
	});

});
