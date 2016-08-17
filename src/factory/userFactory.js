define([],function(){

	return ['$resource', function($resource){
        return $resource('Users/users.json')
    }];

});