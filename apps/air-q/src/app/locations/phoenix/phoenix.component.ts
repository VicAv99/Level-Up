import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-phoenix',
  templateUrl: './phoenix.component.html',
  styleUrls: ['./phoenix.component.css']
})
export class PhoenixComponent {
  @Input() phoenix;
}
