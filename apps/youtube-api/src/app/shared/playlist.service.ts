import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ytapi } from '../../../../../secret/apis';

const PLAYLIST =
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PLhv4jOhq_1oXKZZWYlIBWAh2qwNu8hmSl&fields=etag%2Citems(contentDetails(videoId%2CvideoPublishedAt)%2Cetag%2Cid%2Csnippet(channelTitle%2Cdescription%2CpublishedAt%2CresourceId%2FvideoId%2Cthumbnails%2Fhigh%2Furl%2Ctitle))%2Ckind&key=${ytapi}`;

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylist() {
    return this.http.get<any>(`${PLAYLIST}`)
      .pipe(map(res => res.items));
  }

}
