import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Comic } from './models/comic';

const BASE = 'https://xkcd.com';

@Injectable()
export class ComicsService {

  constructor(private http: HttpClient) { }

  getCurrentComic() {
    const url = `${BASE}/info.0.json`;
    return this.http.get<Comic>(url)
      .pipe(map(res => res));
  }

  getRandomComic(id) {
    const url = `${BASE}/${id}/info.0.json`;
    return this.http.get(url)
      .pipe(map(res => res));
  }

}
