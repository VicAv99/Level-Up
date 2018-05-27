import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Snippet } from '../../shared/snippet.model';

@Component({
  selector: 'app-playlist-detail',
  templateUrl: './playlist-detail.component.html',
  styleUrls: ['./playlist-detail.component.css']
})
export class PlaylistDetailComponent {
  originalVideo: string;
  selectedPlaylist: Snippet;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set video(value: Snippet) {
    if (value) {
      this.originalVideo = value.title;
    }
    this.selectedPlaylist = Object.assign({}, value);
  };

}
