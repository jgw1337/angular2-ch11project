System.register(["angular2/core", "./twitter.service", "./heart.component"], function(exports_1, context_1) {
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
    var core_1, twitter_service_1, heart_component_1;
    var TwitterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (twitter_service_1_1) {
                twitter_service_1 = twitter_service_1_1;
            },
            function (heart_component_1_1) {
                heart_component_1 = heart_component_1_1;
            }],
        execute: function() {
            TwitterComponent = (function () {
                function TwitterComponent(ts) {
                    this.tweets = ts.getTweets();
                }
                TwitterComponent.prototype.onChangeLike = function ($event) {
                    console.log($event);
                };
                TwitterComponent = __decorate([
                    core_1.Component({
                        selector: "my-twitter",
                        template: "\n    <div *ngFor=\"#tweet of tweets\" class=\"media\">\n      <div class=\"media-left\">\n        <a href=\"#\">\n          <img class=\"media-object img-rounded\" src=\"http://lorempixel.com/100/100/people?{{ tweet.id }}\" alt=\"...\">\n        </a>\n      </div>\n      <div class=\"media-body\">\n        <h4 class=\"media-heading\">{{ tweet.name }} <span class=\"twitterHandle\">{{ tweet.handle }}</span></h4>\n        <div>{{ tweet.msg }}</div>\n        <div>\n          <heart [totalLikes]=\"tweet.likes\" [isLiked]=\"tweet.isLiked\" (change)=\"onChangeLike($event)\"></heart>\n        </div>\n      </div>\n    </div>\n  ",
                        styles: ["\n    .media {padding: 10;}\n    .twitterHandle {color:#ccc;}\n  "],
                        providers: [twitter_service_1.TwitterService],
                        directives: [heart_component_1.HeartComponent]
                    }), 
                    __metadata('design:paramtypes', [twitter_service_1.TwitterService])
                ], TwitterComponent);
                return TwitterComponent;
            }());
            exports_1("TwitterComponent", TwitterComponent);
        }
    }
});
//# sourceMappingURL=twitter.component.js.map