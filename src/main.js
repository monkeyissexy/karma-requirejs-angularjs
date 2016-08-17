requirejs.config({
    baseUrl: '/src',
    paths: {
        'angular': '../bower_components/angular/angular',
        'angularMocks': '../bower_components/angular-mocks/angular-mocks',
        'angularResource': '../bower_components/angular-resource/angular-resource'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angularMocks': {deps: ['angular']},
        'angularResource': {deps: ['angular']}
    }
});


