import { Component, OnInit } from '@angular/core';
import { PlaylistService } from '../shared/playlist.service';
import { Snippet } from '../shared/snippet.model';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  constructor(private playlistService: PlaylistService) { }
  currentPlaylist: Snippet;
  playlist: Snippet[];

  ngOnInit() {
    this.displayPlaylist();
  }

  displayPlaylist() {
    this.playlistService.getPlaylist()
      .subscribe(playlist => this.playlist = playlist);
  }

  selectVideo(snippet) {
    this.currentPlaylist = snippet;
    console.log(snippet);
  }
}
