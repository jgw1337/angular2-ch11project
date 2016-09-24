import {GitHubUser} from "./github-user";
import {GitHubFollowers} from "./github-followers";
import {Http} from "angular2/http";
import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/forkJoin';

@Injectable()

export class GutHubService {
  private _username: string = "octocat";
  private _github_base_url: string = "https://api.github.com/users/";

  constructor(private _http : Http) {

  }

  getUser(username) : Observable<GitHubUser[]> {
    return this._http.get(this._github_base_url + username)
        .map(response => response.json());
  }

  getFollowers(username) : Observable<GitHubFollowers[]> {
    return this._http.get(this._github_base_url + username + "/followers")
      .map(response => response.json());
  }

  // getUser(ghu : GitHubUser) : Observable<GitHubUser[]> {
  //   return this._http.get(this._github_base_url + ghu.login)
  //       .map(response => response.json());
  // }

  // getFollowers(ghu : GitHubUser) : Observable<GitHubFollowers[]> {
  //   return this._http.get(this._github_base_url + ghu.login + "/followers")
  //     .map(response => response.json());
  // }

  getUserAndFollowers(ghu : GitHubUser) {
    return Observable.forkJoin(this.getUser(ghu), this.getFollowers(ghu));
  }
}