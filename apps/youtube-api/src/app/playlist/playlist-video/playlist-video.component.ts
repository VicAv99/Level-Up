import { Component, Input } from '@angular/core';
import { Snippet } from '../../shared/snippet.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-playlist-video',
  templateUrl: './playlist-video.component.html',
  styleUrls: ['./playlist-video.component.css']
})
export class PlaylistVideoComponent {
  embedded: Snippet;
  @Input() set playlist(value: Snippet) {
    this.embedded = Object.assign({}, value);
  };

  constructor(private sanitizer: DomSanitizer) {}

  setEmbed() {
    if(this.embedded.resourceId.videoId) {
    let url: any = 'https://www.youtube.com/embed/';
    url = this.sanitizer.bypassSecurityTrustResourceUrl(`${url}${this.embedded.resourceId.videoId}`)
      return url
    }
  }
}
