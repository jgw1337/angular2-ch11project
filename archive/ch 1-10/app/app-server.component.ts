import {Component, OnInit} from 'angular2/core';
import {PostService} from "./post.service";
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
  selector: 'my-app',
  template: `
        <h1>Hello Angular</h1>
        <div *ngIf="isLoading" class="progress">
          <div class="progress-bar progress-bar-striped active"
               role="progressbar"
               aria-valuenow="50"
               aria-valuemin="0"
               aria-valuemax="100"
               style="width:50%;"></div>
          <span class="sr-only">Getting data...</span>
        </div>
    `,
  providers: [PostService, HTTP_PROVIDERS]
})

export class AppServerComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private _ps: PostService) {
  }

  ngOnInit() {
    this.isLoading = false;
    this._ps.getPosts()
      .subscribe(posts => {
        console.log(posts[0].title);
      });
  }
}