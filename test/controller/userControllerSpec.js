define(['app'], function(app) {

    describe('controller unit test', function() {

        var scope, $httpBackend;

        beforeEach(module('myApp'));

        beforeEach(inject(function(_$rootScope_, $controller, _$httpBackend_){

            $httpBackend = _$httpBackend_; 

            $httpBackend.when('GET', 'Users/users.json').respond([{id: 1, name: 'zhangsan'}, {id:2, name: 'lisi'}]);

            scope = _$rootScope_.$new();
            
            $controller('UserController', {$scope: scope});
        }));

        it('case1: test text value == "hello"', function(){
            expect(scope.text).toBe('hello');
        });

        it('case2: test users list ', function(){
            $httpBackend.flush();
            expect(scope.users.length).toBe(2);
            expect(scope.users[1].name).toBe('lisi');
        });

    });

});
