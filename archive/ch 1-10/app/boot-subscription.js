System.register(['angular2/platform/browser', './app-subscription.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_subscription_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_subscription_component_1_1) {
                app_subscription_component_1 = app_subscription_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_subscription_component_1.AppSubscriptionComponent);
        }
    }
});
//# sourceMappingURL=boot-subscription.js.map