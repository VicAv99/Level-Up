import { Component, OnInit } from '@angular/core';
import { FootballService } from '../shared/football.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  id;
  team;
  teams;

  constructor(private footballService: FootballService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(params => params['id']).subscribe(id => {
      this.footballService.teams(id).subscribe(team => {
        this.team = team;
      });
      // this.footballService.
    })
  }

}
