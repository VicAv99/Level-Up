import { Component, OnInit } from '@angular/core';
import { FootballService } from '../shared/football.service';
import { Competitions } from '../shared/models/competitions';

@Component({
  selector: 'app-competitions',
  templateUrl: './competitions.component.html',
  styleUrls: ['./competitions.component.css']
})
export class CompetitionsComponent implements OnInit {
  competitions: Competitions[];

  constructor(private footballService: FootballService) { }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions() {
    this.footballService.competitions()
      .subscribe(res => this.competitions = res);
  }

}
