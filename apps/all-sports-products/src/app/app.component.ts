import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is an app';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/categories', icon: 'view_quilt', label: 'Categories' },
  ];
}
