import {Component} from "angular2/core";

@Component({
  selector: "subscription-form",
  templateUrl: "app/subscription.component.html"
})

export class SubscriptionComponent {
  frequencies: Object[] = [
    {id: 1, display: "Daily"},
    {id: 2, display: "Weekly"},
    {id: 3, display: "Monthly"}
  ]
  
  onSubmit(form) {
    console.log(form);
  }
}