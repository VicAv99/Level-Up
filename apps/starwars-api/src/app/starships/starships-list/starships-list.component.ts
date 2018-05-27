import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-starships-list',
  templateUrl: './starships-list.component.html',
  styleUrls: ['./starships-list.component.css']
})
export class StarshipsListComponent {
  @Input() starships;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

}
