import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from './models/movie';

const BASE = 'http://www.omdbapi.com/';

@Injectable()
export class OmdbService {

  constructor(private http: HttpClient) { }

  searchOmdbMovies(str) {
    const URL = `${BASE}`;
    let params = new HttpParams();
    params = params.append('t', str)
    params = params.append('apikey', 'c541c749')
    return this.http.get<Movie>(URL, {params})
      .pipe(map(res => res));
  }

}
