import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

const pokeapi = 'https://pokeapi.co/api/v2/pokemon/';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon() {
    return this.http.get<any>(`${pokeapi}`)
      .pipe(map(res => res.results));
  }

  getPokemonId(id) {
    return this.http.get<any>(id)
      .pipe(map(res => res));
  }

}
