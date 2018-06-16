import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Football App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/competitions', icon: 'loyalty', label: 'Competitions' },
  ];
  constructor() {}

  ngOnInit() {}
}
