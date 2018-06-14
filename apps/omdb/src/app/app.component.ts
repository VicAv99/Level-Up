import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'OMDB Mobies';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/movie-search', icon: 'loyalty', label: 'Movie Search' },
  ];
  constructor() {}

  ngOnInit() {}
}
