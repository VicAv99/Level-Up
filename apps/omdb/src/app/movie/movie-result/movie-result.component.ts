import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../shared/movie';

@Component({
  selector: 'app-movie-result',
  templateUrl: './movie-result.component.html',
  styleUrls: ['./movie-result.component.css']
})
export class MovieResultComponent {
  @Input() movie: Movie;
}
