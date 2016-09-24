import {Component} from "angular2/core";
import {SubscriptionComponent} from "./subscription.component"

@Component({
  selector: "my-app",
  template: `
    <div class="page-header"><h1>Template-driven Forms in AngularJS</h1></div>
    <subscription-form></subscription-form>
  `,
  directives: [SubscriptionComponent]
})

export class AppSubscriptionComponent {

}