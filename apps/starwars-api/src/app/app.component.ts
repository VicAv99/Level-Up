import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'StarWars API App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/species', icon: 'loyalty', label: 'Species' },
  ];
  constructor() {}

  ngOnInit() {}
}
