System.register(['angular2/core', "./post.service", "angular2/http"], function(exports_1, context_1) {
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
    var core_1, post_service_1, http_1;
    var AppServerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (post_service_1_1) {
                post_service_1 = post_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            AppServerComponent = (function () {
                function AppServerComponent(_ps) {
                    this._ps = _ps;
                    this.isLoading = true;
                }
                AppServerComponent.prototype.ngOnInit = function () {
                    this.isLoading = false;
                    this._ps.getPosts()
                        .subscribe(function (posts) {
                        console.log(posts[0].title);
                    });
                };
                AppServerComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>Hello Angular</h1>\n        <div *ngIf=\"isLoading\" class=\"progress\">\n          <div class=\"progress-bar progress-bar-striped active\"\n               role=\"progressbar\"\n               aria-valuenow=\"50\"\n               aria-valuemin=\"0\"\n               aria-valuemax=\"100\"\n               style=\"width:50%;\"></div>\n          <span class=\"sr-only\">Getting data...</span>\n        </div>\n    ",
                        providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [post_service_1.PostService])
                ], AppServerComponent);
                return AppServerComponent;
            }());
            exports_1("AppServerComponent", AppServerComponent);
        }
    }
});
//# sourceMappingURL=app-server.component.js.map