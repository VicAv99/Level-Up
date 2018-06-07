import { Component, OnInit } from '@angular/core';
import { Album } from '../shared/album';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../shared/spotify.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  id: string;
  album: Album[];

  constructor(private spotifyService: SpotifyService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .pipe(map(params => params['id']))
      .subscribe((id) => {
        this.spotifyService.getAlbum(id)
          .subscribe(album => {
            this.album = album;
          });
      });
  }

}
