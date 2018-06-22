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
  randomComic: Comic;

  constructor(private comicService: ComicsService) { }

  ngOnInit() {
    this.displayCurrentComic();
    this.displayRandomComic();
  }

  displayCurrentComic() {
    this.comicService.getCurrentComic()
      .subscribe(comic => this.currentComic = comic);
  }

  displayRandomComic() {
    const id = Math.floor((Math.random() * 100) + 1);
    this.comicService.getRandomComic(id)
      .subscribe(random => this.randomComic = random);
  }

}
