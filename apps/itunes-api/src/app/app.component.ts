import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Itunes Search App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/search', icon: 'loyalty', label: 'Search' },
  ];
  constructor() {}

  ngOnInit() {}
}
