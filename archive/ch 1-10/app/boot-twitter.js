System.register(["angular2/platform/browser", "./twitter.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, twitter_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (twitter_component_1_1) {
                twitter_component_1 = twitter_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(twitter_component_1.TwitterComponent);
        }
    }
});
//# sourceMappingURL=boot-twitter.js.map