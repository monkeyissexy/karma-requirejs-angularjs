var allTestFiles = [];
var TEST_REGEXP = /(Spec|_test)\.js$/i;
for (var file in window.__karma__.files) {
  if (TEST_REGEXP.test(file)) allTestFiles.push(file);
}

requirejs.config({

    baseUrl: '/base/src',

    paths: {
        'angular': '/base/bower_components/angular/angular',
        'angularMocks': '/base/bower_components/angular-mocks/angular-mocks',
        'angularResource': '/base/bower_components/angular-resource/angular-resource'
    },
    shim: {
        'angular': {exports: 'angular'},
        'angularMocks': {deps: ['angular']},
        'angularResource': {deps: ['angular']}
    },

    // ask Require.js to load these files (all our tests)
    deps: allTestFiles,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});

