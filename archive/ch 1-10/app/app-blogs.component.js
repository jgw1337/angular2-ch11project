System.register(['angular2/core', 'angular2/router', './blog.component', './home.component'], function(exports_1, context_1) {
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
    var core_1, router_1, blog_component_1, home_component_1;
    var AppBlogsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            AppBlogsComponent = (function () {
                function AppBlogsComponent() {
                }
                AppBlogsComponent = __decorate([
                    router_1.RouteConfig([
                        { path: "/home", name: "Home", component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: "/archives/:year/:month", name: "Archive", component: blog_component_1.BlogComponent },
                        { path: "/*other", name: "Other", redirectTo: ["Home"] }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppBlogsComponent);
                return AppBlogsComponent;
            }());
            exports_1("AppBlogsComponent", AppBlogsComponent);
        }
    }
});
//# sourceMappingURL=app-blogs.component.js.map