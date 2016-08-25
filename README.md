# karma-requirejs-angularjs

> I have prepared the demo that show how to karma work with jenkins ci,please checkout `jenkins-ci` branch. In this branch i use phantomjs to run js,and use junit report to generate test report.

At first you can use `git clone` to clone project to your local.

```
git clone git@github.com:monkeyissexy/karma-requirejs-angularjs.git
```

And then, execute the follow commands,because of the project has `bower.json` and `package.json` already.

> Notice. Karma is based on NodeJs.So, you need install NodeJs at first.

```
# just execute once
npm intall karma-cli -g 

cd project_path
bower install
npm install
```

Before you execute above commands, please make sure that you have installed `npm` and `bower` tools first.


Finally,navigate to project and then you can start karma to run unit testes,the command like this:

```
karma start 
```
