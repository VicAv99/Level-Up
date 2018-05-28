import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Poke API App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/<somepath>', icon: 'loyalty', label: '<somelabel>' },
  ];
  constructor() {}

  ngOnInit() {}
}
