import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
})
export class StarRatingComponent implements OnInit, OnChanges {
  public starWidth: number;
  @Input()
  public rating: number = 2;

  @Output()
  starRatingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnChanges(): void {
    this.starWidth = (this.rating * 125) / 5;
  }

  ngOnInit(): void {}

  public sendRating(): void {
    this.starRatingClicked.emit(`La note est de ${this.rating}`);
  }
}
