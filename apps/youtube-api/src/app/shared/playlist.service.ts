import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { api } from "../../api";

const PLAYLIST =
  `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PLhv4jOhq_1oXKZZWYlIBWAh2qwNu8hmSl&fields=items(contentDetails%2FvideoPublishedAt%2Cid%2Csnippet(channelTitle%2Cdescription%2CpublishedAt%2Cthumbnails%2Fhigh%2Ctitle))&key=${api}`;

@Injectable()
export class PlaylistService {

  constructor(private http: HttpClient) { }

  getPlaylist() {
    return this.http.get<any>(`${PLAYLIST}`)
      .pipe(map(res => res.items));
  }

}
