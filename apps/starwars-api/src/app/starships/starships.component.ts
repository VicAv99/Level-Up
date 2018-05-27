import { Component, OnInit } from '@angular/core';
import { StarshipsService } from '../shared/starships.service';
import { Starship } from '../shared/starship.model';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  currentStarship: Starship;
  starships: Starship[];

  constructor(private starshipsService: StarshipsService) { }

  ngOnInit() {
    this.allStarships();
  }

  allStarships() {
    this.starshipsService.getStarships()
      .subscribe(starshipRes => this.starships = starshipRes);
  }

  reset() {
    this.currentStarship =
      {
      name: '',
      model: '',
      cost_in_credits: null,
      crew: null,
      cargo_capacity: null,
      starship_class: '',
      manufacturer: '',
      hyperdrive_rating: null
      }
  }

  selectStarship(starship) {
    this.currentStarship = starship;
    console.log(starship);
  }

  saveStarship() {
    alert('Starshipity!');
  }

  deleteStarhip() {
    alert('Starship gone!');
  }

  cancel(starship) {
    this.reset();
  }

}
