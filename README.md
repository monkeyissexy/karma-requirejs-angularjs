# karma-requirejs-angularjs

At first you can use `git clone` to clone project to your local.

```
git clone git@github.com:monkeyissexy/karma-requirejs-angularjs.git
```

And then, execute the follow commands,because of the project has `bower.json` and `package.json` already.

> Notice. Karma is based on NodeJs.So, you need install NodeJs at first.

```
cd project_path
bower install
npm install
npm intall karma-cli -g
```

Before you execute above commands, please make sure that you have installed `npm` and `bower` tools first.


Finally,navigate to project and then you can start karma to run unit testes,the command like this:

```
karma start 
```
