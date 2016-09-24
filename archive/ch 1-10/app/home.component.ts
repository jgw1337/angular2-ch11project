import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
  template: `
    <h1>Home Page</h1>
    <ul *ngFor="#year of years">
        <li *ngFor="#month of months">
            <a [routerLink]="['Archive', {year: year, month: month}]">
                {{ year }} / {{ month }} 
            </a>
        </li>
    </ul>
  `,
  directives: [ROUTER_DIRECTIVES]
})

export class HomeComponent {
    years = [2016];
    months = [1,2,3];
}