/******/ ! function(e) {
    function t(n) {
            if (i[n]) return i[n].exports;
            var a = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
        } // webpackBootstrap
        /******/
    var i = {};
    return t.m = e, t.c = i, t.p = "", t(0)
}([
    function(e, t, i) {
        var n, a = i(1),
            s = i(2),
            o = i(3),
            r = i(4),
            c = i(5),
            l = i(6);
        ! function(e) {
            "use strict";
            angular.module("ghlist", ["ngAnimate", "ngCookies",
                    "ngSanitize", "ui.router", "ui.bootstrap"
                ]).constant("malarkey", malarkey).constant("moment", moment)
                .config(a.config).config(s.routerConfig).run(o.runBlock).service(
                    "blockspringApi", c.BlockspringApi).service("postRepo",
                    l.PostRepo).controller("MainController", r.MainController)
        }(n || (n = {}))
    },
    function(e, t) {
        function i(e) {
            e.debugEnabled(!0)
        }
        i.$inject = ["$logProvider"], t.config = i
    },
    function(e, t) {
        function i(e, t) {
            e.state("home", {
                url: "/",
                templateUrl: "app/main/main.html",
                controller: "MainController",
                controllerAs: "main"
            }), t.otherwise("/")
        }
        i.$inject = ["$stateProvider", "$urlRouterProvider"], t.routerConfig =
            i
    },
    function(e, t) {
        function i(e) {
            e.debug("runBlock end")
        }
        i.$inject = ["$log"], t.runBlock = i
    },
    function(e, t) {
        var i = function() {
            function e(e, t) {
                this.postRepo = t, this.activeCategory = "", this.searchActive = !
                    1, this.searchTerm = "";
                var i = this;
                t.loadUrl(
                    "https://docs.google.com/spreadsheets/d/1bL3HFRsE8h-neTtniXHIWiCwy6Ty88gCbwsrRt83ptc/edit?pli=1#gid=0&vpid=A2"
                ).then(function(e) {
                    i.posts = e[0], i.tags = e[1]
                })
            }
            return e.$inject = ["$timeout", "postRepo"], e.prototype.getActiveSelectionPosts =
                function() {
                    return "" === this.activeCategory || this.searchActive ?
                        this.posts : this.tags[this.activeCategory]
                }, e.prototype.toggleActiveCategory = function(e) {
                    this.activeCategory === e ? this.activeCategory =
                        "" : this.activeCategory = e
                }, e
        }();
        t.MainController = i
    },
    function(e, t) {
        var i = function() {
            function e(e, t, i) {
                this.$log = e, this.$q = t, this.$http = i
            }
            return e.$inject = ["$log", "$q", "$http"], e.prototype.getSpreadsheet =
                function(e) {
                    var t = this,
                        i = this.$q.defer();
                    return blockspring.runParsed(
                        "query-google-spreadsheet", {
                            query: "SELECT A, B, C, D, E, F, G, H, I",
                            url: e
                        }, function(e) {
                            i.resolve(e.params.data)
                        }, function(e) {
                            i.reject(), t.$log.error(
                                "XHR Failed for getContributors.\n",
                                e.data)
                        }), i.promise
                }, e
        }();
        t.BlockspringApi = i
    },
    function(e, t) {
        var i = function() {
            function e(e) {
                this.blockspringApi = e, this.tags = {}
            }
            return e.$inject = ["blockspringApi"], e.prototype.loadUrl =
                function(e) {
                    var t = this;
                    return this.blockspringApi.getSpreadsheet(e).then(
                        function(e) {
                            return [e.map(function(e) {
                                return e.tags = (e.category ||
                                        " ").split(","),
                                    $.each(e.tags,
                                        function(i, n) {
                                            t.addPostForTag(
                                                n,
                                                e)
                                        }), e
                            }), t.tags]
                        })
                }, e.prototype.addPostForTag = function(e, t) {
                    void 0 === e && (e = ""), "" !== e && (this.tags.hasOwnProperty(
                        e) ? this.tags[e].push(t) : this.tags[e] = [
                        t
                    ])
                }, e
        }();
        t.PostRepo = i
    }
]), angular.module("ghlist").run(["$templateCache",
    function(e) {
        e.put("app/main/main.html",
            '<div class="container"><div class="page-title row"><div class="hidden-xs page-icon col-sm-2 col-md-2"><span class="glyphicon glyphicon-globe" aria-hidden="true"></span></div><div class="col-sm-10 col-md-10"><h2><b>leipzig</b>: <br> list of initiatives working with refugees</h2><ul ng-if="main.posts.length > 0" class="fade nav nav-pills" style="border: 1px solid black"><li role="presentation" ng-hide="main.searchActive" ng-class="{active: main.activeCategory == \'\'}"><a style="color: #930320; font-weight:bold" ng-click="main.activeCategory = \'\'" href="#">Alle <span class="badge">{{main.posts.length}}</span></a></li><li role="presentation" ng-hide="main.searchActive" ng-repeat="(key, value) in main.tags" ng-class="{active: key == main.activeCategory}"><a style="color: #930320; font-weight:bold" ng-click="main.activeCategory = key;" href="#">{{key == " " ? "sonstige" : key}} <span class="badge">{{value.length}}</span></a></li><li><a href="#" ng-hide="main.searchActive" ng-click="main.searchActive = true"><span class="glyphicon glyphicon-search" aria-hidden="true"></span></a></li><li ng-show="main.searchActive" role="presentation"><div class="col-md-5 input-group"><input type="text" ng-model="main.searchTerm" class="form-control" placeholder="suchen" aria-describedby="basic-addon2"> <a class="input-group-addon" id="basic-addon2"><span ng-click="main.searchTerm = \'\'; main.searchActive = false" class="glyphicon glyphicon-remove" aria-hidden="true"></span> {{count}}</a></div></li></ul></div><div ng-show="!main.posts.length" class="row"><div class="col-sm-6 col-md-12"><div class="progress"><div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%"><span class="sr-only">Loading</span></div></div></div></div><div ng-if="main.posts.length" class="row"><div class="col-sm-6 col-md-12"><div ng-repeat="post in main.getActiveSelectionPosts() | filter: main.searchTerm | orderBy:\'name\'" class="fade panel panel-default"><div class="panel-heading"><h3 class="panel-title"><b ng-if="post.name_affix">{{post.name_affix}} - </b><b>{{post.name}} </b></h3></div><div class="panel-body">{{ post.description }}</div><div class="panel-footer"><a ng-href="{{post.website}}" target="_blank" ng-if="post.website">{{post.website}}</a><a ng-href="{{post.facebook}}" target="_blank" ng-if="post.facebook">   |   {{post.facebook}}</a><a ng-href="mailto:{{post.mail}}" target="_blank" ng-if="post.mail">  |   {{post.mail}} </a> <span ng-if="post.place">  |   {{post.place}}<\span></div></div></div></div></div>'
        )
    }
]);
//# sourceMappingURL=../maps/scripts/app-a27f917301.js.map
