export class TwitterService {
  getTweets() : Object[] {
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
    ]
  }
}