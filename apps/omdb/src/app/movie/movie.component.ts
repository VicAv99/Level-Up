import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../shared/omdb.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie;

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
  }

  getMovies(srch) {
    this.omdbService.searchOmdbMovies(srch)
      .subscribe(res => this.movie = res);
  }
}
