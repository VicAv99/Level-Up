import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokeurl;
  @Input() pokeid;
  @Output() url = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
