System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TwitterService;
    return {
        setters:[],
        execute: function() {
            TwitterService = (function () {
                function TwitterService() {
                }
                TwitterService.prototype.getTweets = function () {
                    return [
                        {
                            id: 1,
                            name: "Windward",
                            handle: "@windwardstudios",
                            msg: "Looking for a better company reporting or docgen app?",
                            likes: 0,
                            isLiked: false
                        },
                        {
                            id: 2,
                            name: "AngularJS News",
                            handle: "@angularjs_news",
                            msg: "Right relevance: Influencers, Articles, and Conversations",
                            likes: 5,
                            isLiked: true
                        },
                        {
                            id: 1337,
                            name: "UX & Bootstrap",
                            handle: "@3rdwave",
                            msg: "10 Reasons Why Web Projects Fail",
                            likes: 1,
                            isLiked: true
                        }
                    ];
                };
                return TwitterService;
            }());
            exports_1("TwitterService", TwitterService);
        }
    }
});
//# sourceMappingURL=twitter.service.js.map