import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {BlogComponent} from './blog.component';
import {HomeComponent} from './home.component';

@RouteConfig([
    { path: "/home", name: "Home", component: HomeComponent, useAsDefault: true },
    { path: "/archives/:year/:month", name: "Archive", component: BlogComponent },
    { path: "/*other", name: "Other", redirectTo: ["Home"] }
])

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})

export class AppBlogsComponent {

}