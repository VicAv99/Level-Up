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
  selectedPlaylist: Snippet;
  playlist = {};
  snippet: Snippet;
  snippets: Snippet[];

  ngOnInit() {
    this.displayPlaylist();
  }

  displayPlaylist() {
    this.playlistService.getPlaylist()
      .subscribe(playlist => this.playlist = playlist);
  }

  reset() {
    this.playlist = { channelTitle: '', description: '', publishedAt: '', thumbnails: null, title: '' };
  }

  select(snippet) {
    this.selectedPlaylist = snippet.title;
    console.log(snippet);
  }

  delete(playlist) {
    this.reset();
    console.log(this.reset());
  }
}
