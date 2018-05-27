import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Starship } from '../../shared/starship.model';

@Component({
  selector: 'app-starships-detail',
  templateUrl: './starships-detail.component.html',
  styleUrls: ['./starships-detail.component.css']
})
export class StarshipsDetailComponent {
  selectedStarship: Starship;
  @Output() cancelled = new EventEmitter();
  @Output() saved = new EventEmitter();
  @Input() set starship(value: Starship) {
    this.selectedStarship = Object.assign({}, value);
  };
}
