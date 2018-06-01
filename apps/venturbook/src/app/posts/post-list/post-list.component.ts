import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../shared/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  @Input() posts;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}
