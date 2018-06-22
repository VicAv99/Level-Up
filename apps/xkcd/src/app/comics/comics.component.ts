import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../shared/comics.service';
import { Comic } from '../shared/models/comic';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  currentComic: Comic;

  constructor(private comicService: ComicsService) { }

  ngOnInit() {
    this.displayCurrentComic();
  }

  displayCurrentComic() {
    this.comicService.getCurrentComic()
      .subscribe(comic => this.currentComic = comic);
  }

}
