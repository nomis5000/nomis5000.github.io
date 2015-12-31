/******/!function(t){function e(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return t[o].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}// webpackBootstrap
/******/
var r={};return e.m=t,e.c=r,e.p="",e(0)}([function(t,e,r){var o,n=r(1),i=r(2),a=r(3),s=r(4),l=r(5),c=r(6),u=r(7),p=r(8);!function(t){"use strict";angular.module("ghlist",["ngAnimate","ngCookies","ngSanitize","ui.router","ui.bootstrap","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(n.config).config(i.routerConfig).run(a.runBlock).service("githubContributor",l.GithubContributor).service("webDevTec",c.WebDevTecService).controller("MainController",s.MainController).directive("acmeNavbar",u.acmeNavbar).directive("acmeMalarkey",p.acmeMalarkey)}(o||(o={}))},function(t,e){function r(t,e){t.debugEnabled(!0),e.allowHtml=!0,e.timeOut=3e3,e.positionClass="toast-top-right",e.preventDuplicates=!0,e.progressBar=!0}r.$inject=["$logProvider","toastrConfig"],e.config=r},function(t,e){function r(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),e.otherwise("/")}r.$inject=["$stateProvider","$urlRouterProvider"],e.routerConfig=r},function(t,e){function r(t){t.debug("runBlock end")}r.$inject=["$log"],e.runBlock=r},function(t,e){var r=function(){function t(t,e,r){this.awesomeThings=new Array,this.webDevTec=e,this.classAnimation="",this.creationDate=1449336227936,this.toastr=r,this.activate(t)}return t.$inject=["$timeout","webDevTec","toastr"],t.prototype.activate=function(t){this.getWebDevTec();var e=this;t(function(){e.classAnimation="rubberBand"},4e3)},t.prototype.activate.$inject=["$timeout"],t.prototype.showToastr=function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""},t.prototype.getWebDevTec=function(){this.awesomeThings=this.webDevTec.tec},t}();e.MainController=r},function(t,e){var r=function(){function t(t,e){this.$log=t,this.$http=e,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return t.$inject=["$log","$http"],t.prototype.getContributors=function(t){var e=this;return void 0===t&&(t=30),this.$http.get(this.apiHost+"/contributors?per_page="+t).then(function(t){return t.data})["catch"](function(t){e.$log.error("XHR Failed for getContributors.\n",t.data)})},t}();e.GithubContributor=r},function(t,e){var r=function(){function t(){var t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Angular UI Bootstrap",url:"http://angular-ui.github.io/bootstrap/",description:"Bootstrap components written in pure AngularJS by the AngularUI Team.",logo:"ui-bootstrap.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"TypeScript",url:"http://www.typescriptlang.org/",description:"TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",logo:"typescript.png"}];this.data=t.map(function(t){return t.rank=Math.random(),t})}return Object.defineProperty(t.prototype,"tec",{get:function(){return this.data},enumerable:!0,configurable:!0}),t}();e.WebDevTecService=r},function(t,e){function r(){return{restrict:"E",scope:{creationDate:"="},templateUrl:"app/components/navbar/navbar.html",controller:o,controllerAs:"vm",bindToController:!0}}e.acmeNavbar=r;var o=function(){function t(t){this.relativeDate=t(this.creationDate).fromNow()}return t.$inject=["moment"],t}();e.NavbarController=o},function(t,e){function r(t){return{restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:o,controller:n,controllerAs:"vm"}}function o(t,e,r,o){var n,i=o.malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){i.type(t).pause()["delete"]()}),n=t.$watch("vm.contributors",function(t,e){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){n()})}r.$inject=["malarkey"],e.acmeMalarkey=r;var n=function(){function t(t,e,r){this.$log=t,this.githubContributor=e,this.malarkey=r,this.contributors=[],this.activate()}return t.$inject=["$log","githubContributor","malarkey"],t.prototype.activate=function(){var t=this;return this.getContributors().then(function(){t.$log.info("Activated Contributors View")})},t.prototype.getContributors=function(){var t=this;return this.githubContributor.getContributors(10).then(function(e){return t.contributors=e,t.contributors})},t}();e.MalarkeyController=n}]),angular.module("ghlist").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container"><div class="row"><div class="col-sm-12"><h2 class="text-right"><b>leipzig</b>: list of initiatives working with refugees</h2></div></div><div class="row"><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="thumbnail"><img class="pull-right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{awesomeThing.url}}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-a60deac9c3.js.map
