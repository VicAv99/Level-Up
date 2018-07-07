import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  login() {
    const redirect = `${window.location.protocol}//${window.location.host}/search`;
    (<any>window).location = `https://accounts.spotify.com/authorize?client_id=da88c95033a84b2ab047c9fbf69555be&response_type=token&redirect_uri=${redirect}`;
  }

}
