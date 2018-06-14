import { Component, OnInit } from '@angular/core';
import { OmdbService } from '../shared/omdb.service';
import { Movie } from '../shared/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movies: Movie[];
  movie: Movie;

  constructor(private omdbService: OmdbService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.omdbService.omdbMovies()
      .subscribe(res => this.movie = res);
  }
}
