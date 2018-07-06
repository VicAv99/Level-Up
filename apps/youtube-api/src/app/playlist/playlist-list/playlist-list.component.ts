import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
  styleUrls: ['./playlist-list.component.css']
})
export class PlaylistListComponent {
  @Input() playlist;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
