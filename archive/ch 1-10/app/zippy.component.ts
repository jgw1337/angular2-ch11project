import {Component, Input} from "angular2/core";

@Component({
  selector: "zippy",
  template: `
    <div class="panel panel-default zippy">
      <div class="panel-heading" (click)="onClick()">
        <h3 class="panel-title">
          {{ title }}
          <span class="glyphicon pull-right"
                [ngClass]="{
                  'glyphicon-chevron-up': isExpanded,
                  'glyphicon-chevron-down': !isExpanded
                }"
          ></span>
        </h3>
      </div>
      <div class="panel-body" *ngIf="isExpanded">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .zippy {padding:0px;margin:0px;}
  `]
})

export class ZippyComponent {
  @Input() title: string =  "Default title";
  isExpanded: boolean = false;

  onClick() {
    this.isExpanded = !this.isExpanded;
  }
}