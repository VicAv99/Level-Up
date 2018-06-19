import { Component, OnInit } from '@angular/core';
import { QualityService } from '../shared/quality.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
  phoenix;

  constructor(private qualityService: QualityService) { }

  ngOnInit() {
    this.getPhxQuality();
    this.log();
  }

  getPhxQuality() {
    this.qualityService.getPhoenixLocation()
      .subscribe(res => this.phoenix = res.results[5201]);
  }

  log() {
    this.qualityService.getPhoenixLocation()
      .subscribe(res => console.log('LOOK HERE!', res.results))
  }

}
