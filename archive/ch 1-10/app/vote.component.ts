import {Component, EventEmitter, Input, Output} from "angular2/core";

@Component({
  selector: "vote",
  template: `
    <div>
      <span class="glyphicon glyphicon-menu-up"
           [class.myVote]="myVote == 1"
           (click)="onClick(1)"
      ></span>
      <span>{{ voteCount }}</span>
      <span class="glyphicon glyphicon-menu-down"
           [class.myVote]="myVote == -1"
           (click)="onClick(-1)"
      ></span>
    </div>
  `,
  styles: [`
    div {width: 20;text-align:center;font-size:24px;}
    .myVote {color: gold;}
  `]
})

export class VoteComponent {
  title: "Voter Component";
  @Input() voteCount: number = 0;
  @Input() myVote: number = 0;

  @Output() vote = new EventEmitter();

  onClick(increment) {
    if ((this.myVote > -1 && increment == -1) || (this.myVote < 1 && increment == 1)) {
      this.voteCount += increment;
      this.myVote += increment;
    }
    this.vote.emit({myVote: this.myVote, voteCount: this.voteCount})
  }
}