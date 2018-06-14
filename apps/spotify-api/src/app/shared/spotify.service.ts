import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

const BASE_URL = 'https://api.spotify.com/v1/';

@Injectable()
export class SpotifyService {
  access_token;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  private buildHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', `Bearer ${this.access_token}`);
    return headers;
  }

  setToken(accessToken: string) {
    this.access_token = accessToken;
    console.log('ACCESS', accessToken);
  }

  searchMusic(str: string, type = 'artist') {
    const URL = `${BASE_URL}search`;
    const headers = this.buildHeaders();
    let params = new HttpParams();
    params = params.append('q', str);
    params = params.append('type', type);
    params = params.append('limit', '20');

    return this.http.get<any>(`${URL}`, { headers, params })
      .pipe(map(res => res));
  }

  getArtist(id: string) {
    const URL = `${BASE_URL}artists`;
    const headers = this.buildHeaders();
    return this.http.get<any>(`${URL}/${id}`, { headers })
      .pipe(map(res => res));
  }

  getAlbums(id: string) {
    const URL = `${BASE_URL}artists`;
    const headers = this.buildHeaders();
    return this.http.get<any>(`${URL}/${id}/albums`, { headers })
      .pipe(map(res => res));
  }

  getAlbum(id: string) {
    const URL = `${BASE_URL}albums`;
    const headers = this.buildHeaders();
    return this.http.get<any>(`${URL}/${id}`, { headers })
      .pipe(map(res => res));
  }
}
