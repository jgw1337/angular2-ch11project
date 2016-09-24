import {Component, OnInit} from 'angular2/core';
import {GutHubService} from "./github.service";
import {HTTP_PROVIDERS} from "angular2/http";
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'my-app',
  template: `
        <h1>Hello GitHub Exercise</h1>
        <i *ngIf="isLoading" class="fa fa-spinner fa-spin fa-3x"></i>

        <h2>{{ gitHubUser.login }}</h2>
        <img class="media-object avatar" src="{{ gitHubUser.avatar_url }}" alt="{{ gitHubUser.login }}">

        <h2>Followers</h2>
        <div class="media" *ngFor="#item of followers">
          <div class="media-left">
            <a href="#">
              <img class="media-object avatar" src="{{ item.avatar_url }}" alt="{{ item.login }}">
            </a>
          </div>
          <div class="media-body">
            <h4 class="media-heading">{{ item.login }}</h4>
          </div>
        </div>
    `,
  styles: [".avatar {width:100;height:100;border-radius:100%;}"],
  providers: [GutHubService, HTTP_PROVIDERS]
})

export class AppGitHubComponent implements OnInit {
  gitHubLogin: string = "octocat";
  gitHubUser = {};
  followers = [];
  isLoading = true;

  constructor(private _ghs: GutHubService) {

  }

  ngOnInit() {
    // this._ghs.getUserAndFollowers({ login: this.gitHubLogin })
    Observable.forkJoin(
      this._ghs.getUser(this.gitHubLogin),
      this._ghs.getFollowers(this.gitHubLogin)
    )
      .subscribe(
      data => {
        this.gitHubUser = data[0];
        this.followers = data[1];
        console.log(this.gitHubUser);
      },
      err => console.error(err),
      () => {
        this.isLoading = false;
        console.log("done");
      }
      );
  }
}