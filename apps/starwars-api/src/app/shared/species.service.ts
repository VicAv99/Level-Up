import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const SPECIES = 'https://swapi.co/api/species/';

@Injectable()
export class SpeciesService {

  constructor(private http: HttpClient) { }

  getSpecies() {
    return this.http.get(SPECIES)
      .pipe(map(res => res));
  }

}
