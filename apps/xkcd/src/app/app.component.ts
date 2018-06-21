import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'XKCD Comics';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/comics', icon: 'loyalty', label: 'Comics' },
  ];
}
