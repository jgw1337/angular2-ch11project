import {Component, OnInit} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';

@Component({
  template: `
    <h1>Archives</h1>
    {{ year }} / {{ month }}
  `
})

export class BlogComponent implements OnInit {
  year;
  month;

  constructor(
      private _router : Router,
      private _routeParams : RouteParams
  ) {

  }

  ngOnInit() {
    this.year = this._routeParams.get("year");
    this.month = this._routeParams.get("month");

    if (this.month == "") {
      this._router.navigate(["Home"]);
    }
  }
}