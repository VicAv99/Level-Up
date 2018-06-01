import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../shared/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent {
  originalPost: Post;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set original(value: Post) {
    this.originalPost = Object.assign({}, value);
  }
}
