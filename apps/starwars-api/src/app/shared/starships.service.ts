import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const SPECIES = 'https://swapi.co/api/starships/';

@Injectable()
export class StarshipsService {

  constructor(private http: HttpClient) { }

  getStarships() {
    return this.http.get<any>(SPECIES)
      .pipe(map(res => res.results));
  }

}
