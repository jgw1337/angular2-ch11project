import {Component, Input, Output, EventEmitter} from "angular2/core"

@Component({
  selector: "favorites",
  templateUrl: "app/favorites.template.html",
  styles: [`
    .glyphicon-star {color:red;}
  `]
})

export class FavoriteComponent{
  @Input() isFavorite: boolean = false;

  @Output() change = new EventEmitter();

  onClick() {
    this.isFavorite = !this.isFavorite;
    this.change.emit({ newValue: this.isFavorite });
  }
}