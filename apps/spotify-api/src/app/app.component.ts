import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngSpot';
  links = [
    { path: '/', icon: 'home', label: 'Home'},
    { path: '/login', icon: 'folder_shared', label: 'Login' },
  ];
  constructor() {}

  ngOnInit() {}
}
