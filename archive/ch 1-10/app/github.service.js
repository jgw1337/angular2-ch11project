System.register(["angular2/http", "angular2/core", "rxjs/Observable", 'rxjs/add/operator/map', 'rxjs/add/observable/forkJoin'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var http_1, core_1, Observable_1;
    var GutHubService;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            GutHubService = (function () {
                function GutHubService(_http) {
                    this._http = _http;
                    this._username = "octocat";
                    this._github_base_url = "https://api.github.com/users/";
                }
                GutHubService.prototype.getUser = function (username) {
                    return this._http.get(this._github_base_url + username)
                        .map(function (response) { return response.json(); });
                };
                GutHubService.prototype.getFollowers = function (username) {
                    return this._http.get(this._github_base_url + username + "/followers")
                        .map(function (response) { return response.json(); });
                };
                // getUser(ghu : GitHubUser) : Observable<GitHubUser[]> {
                //   return this._http.get(this._github_base_url + ghu.login)
                //       .map(response => response.json());
                // }
                // getFollowers(ghu : GitHubUser) : Observable<GitHubFollowers[]> {
                //   return this._http.get(this._github_base_url + ghu.login + "/followers")
                //     .map(response => response.json());
                // }
                GutHubService.prototype.getUserAndFollowers = function (ghu) {
                    return Observable_1.Observable.forkJoin(this.getUser(ghu), this.getFollowers(ghu));
                };
                GutHubService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], GutHubService);
                return GutHubService;
            }());
            exports_1("GutHubService", GutHubService);
        }
    }
});
//# sourceMappingURL=github.service.js.map