import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'YouTube API App';
  links = [
    { path: '/home', icon: 'home', label: 'Home' },
    { path: '/playlist', icon: 'play_arrow', label: 'Playlist' }
  ];
}
