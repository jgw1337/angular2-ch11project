import {Component, EventEmitter, Input, Output} from "angular2/core"

@Component({
  selector: "heart",
  template: `
    <span class="glyphicon glyphicon-heart"
         [class.glyphiconheart-yes]="isLiked"
         (click)="onClick()"
    ></span>
    {{ totalLikes }}
  `,
  styles: [`
    .glyphicon-heart {cursor:pointer;color:#ccc;}
    .glyphiconheart-yes {color:deeppink;}
  `]
})

export class HeartComponent{
  title: "I <3 This";
  @Input() totalLikes: number = 0;
  @Input() isLiked: boolean = false;

  @Output() change = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    this.totalLikes += this.isLiked ? 1 : -1;
    this.change.emit({isLiked: this.isLiked, totalLikes: this.totalLikes})
  }
}