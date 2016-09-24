System.register(['angular2/core', "./github.service", "angular2/http", "rxjs/Rx"], function(exports_1, context_1) {
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
    var core_1, github_service_1, http_1, Rx_1;
    var AppGitHubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            AppGitHubComponent = (function () {
                function AppGitHubComponent(_ghs) {
                    this._ghs = _ghs;
                    this.gitHubLogin = "octocat";
                    this.gitHubUser = {};
                    this.followers = [];
                    this.isLoading = true;
                }
                AppGitHubComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // this._ghs.getUserAndFollowers({ login: this.gitHubLogin })
                    Rx_1.Observable.forkJoin(this._ghs.getUser(this.gitHubLogin), this._ghs.getFollowers(this.gitHubLogin))
                        .subscribe(function (data) {
                        _this.gitHubUser = data[0];
                        _this.followers = data[1];
                        console.log(_this.gitHubUser);
                    }, function (err) { return console.error(err); }, function () {
                        _this.isLoading = false;
                        console.log("done");
                    });
                };
                AppGitHubComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello GitHub Exercise</h1>\n        <i *ngIf=\"isLoading\" class=\"fa fa-spinner fa-spin fa-3x\"></i>\n\n        <h2>{{ gitHubUser.login }}</h2>\n        <img class=\"media-object avatar\" src=\"{{ gitHubUser.avatar_url }}\" alt=\"{{ gitHubUser.login }}\">\n\n        <h2>Followers</h2>\n        <div class=\"media\" *ngFor=\"#item of followers\">\n          <div class=\"media-left\">\n            <a href=\"#\">\n              <img class=\"media-object avatar\" src=\"{{ item.avatar_url }}\" alt=\"{{ item.login }}\">\n            </a>\n          </div>\n          <div class=\"media-body\">\n            <h4 class=\"media-heading\">{{ item.login }}</h4>\n          </div>\n        </div>\n    ",
                        styles: [".avatar {width:100;height:100;border-radius:100%;}"],
                        providers: [github_service_1.GutHubService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GutHubService])
                ], AppGitHubComponent);
                return AppGitHubComponent;
            }());
            exports_1("AppGitHubComponent", AppGitHubComponent);
        }
    }
});
//# sourceMappingURL=app-github.component.js.map