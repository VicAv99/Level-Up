import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Movie } from './movie';

const BASE = 'http://www.omdbapi.com/?i=tt3896198&apikey=c541c749';

@Injectable()
export class OmdbService {

  constructor(private http: HttpClient) { }

  omdbMovies() {
    return this.http.get<Movie>(BASE)
      .pipe(map(res => res));
  }

}
