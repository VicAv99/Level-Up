import { Component, OnInit } from '@angular/core';
import { FootballService } from '../../shared/football.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../shared/models/team';
import { Competitions } from '../../shared/models/competitions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  id: string;
  team: Team;
  competitions: Competitions[];

  constructor(private footballService: FootballService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(map(params => params['id']))
      .subscribe(id => {
        this.footballService.teams(id).subscribe(team => {
          this.team = team.teams;
        })
      })
  }

}
