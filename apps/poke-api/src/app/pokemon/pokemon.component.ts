import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../shared/pokemon.service';
import { PokeUrl } from '../shared/pokeurl.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokeurl: PokeUrl[];
  pokeid;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.getPoke();
  }

  getPoke() {
    this.pokemonService.getPokemon()
      .subscribe(pokeRes => this.pokeurl = pokeRes);
  }

  pokeUrl(poke) {
    this.pokemonService.getPokemonId(poke)
      .subscribe(pokeidRes => this.pokeid = pokeidRes);
  }

}
