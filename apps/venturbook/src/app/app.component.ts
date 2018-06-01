import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VenturBook App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/posts', icon: 'loyalty', label: 'Posts' }
  ];
}
