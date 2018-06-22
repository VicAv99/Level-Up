import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Comic } from '../../shared/models/comic';

@Component({
  selector: 'app-random-comic',
  templateUrl: './random-comic.component.html',
  styleUrls: ['./random-comic.component.css']
})
export class RandomComicComponent {
  random: Comic;
  @Input() set randomComic(value: Comic) {
    this.random = Object.assign({}, value);
  }
  @Output() randomId = new EventEmitter();

  createId() {
    const id = Math.floor((Math.random() * 100) + 1);
    this.randomId.emit(id);
  }
}
