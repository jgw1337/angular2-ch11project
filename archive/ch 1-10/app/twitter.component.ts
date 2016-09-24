import {Component} from "angular2/core"
import {TwitterService} from "./twitter.service"
import {HeartComponent} from "./heart.component"

@Component({
  selector: "my-twitter",
  template: `
    <div *ngFor="#tweet of tweets" class="media">
      <div class="media-left">
        <a href="#">
          <img class="media-object img-rounded" src="http://lorempixel.com/100/100/people?{{ tweet.id }}" alt="...">
        </a>
      </div>
      <div class="media-body">
        <h4 class="media-heading">{{ tweet.name }} <span class="twitterHandle">{{ tweet.handle }}</span></h4>
        <div>{{ tweet.msg }}</div>
        <div>
          <heart [totalLikes]="tweet.likes" [isLiked]="tweet.isLiked" (change)="onChangeLike($event)"></heart>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .media {padding: 10;}
    .twitterHandle {color:#ccc;}
  `],
  providers: [TwitterService],
  directives: [HeartComponent]
})

export class TwitterComponent {
  title: "Twitter component";
  tweets;

  constructor(ts : TwitterService) {
    this.tweets = ts.getTweets();
  }

  onChangeLike($event) {
    console.log($event);
  }
}