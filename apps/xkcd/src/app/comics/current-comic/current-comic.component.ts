import { Component, OnInit, Input } from '@angular/core';
import { Comic } from '../../shared/models/comic';

@Component({
  selector: 'app-current-comic',
  templateUrl: './current-comic.component.html',
  styleUrls: ['./current-comic.component.css']
})
export class CurrentComicComponent {
  comic: Comic;
  @Input() set current(value: Comic) {
    this.comic = Object.assign({}, value);
  }
}
