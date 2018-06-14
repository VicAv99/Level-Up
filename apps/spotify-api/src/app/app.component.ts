import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngSpot';
  links = [
    { path: '/login', icon: 'home', label: 'Home' },
    { path: '/search', icon: 'loyalty', label: 'Search Music' },
  ];
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
  }
}
