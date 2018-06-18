import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Google Books App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/books', icon: 'loyalty', label: 'Books' },
  ];
  constructor() {}

  ngOnInit() {}
}
