System.register(['angular2/platform/browser', './app-singlepageapp.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_singlepageapp_component_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_singlepageapp_component_1_1) {
                app_singlepageapp_component_1 = app_singlepageapp_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_singlepageapp_component_1.AppSPAComponent, [router_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=boot-singlepageapp.js.map