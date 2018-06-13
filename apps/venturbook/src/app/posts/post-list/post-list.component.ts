import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../../shared/post';
import { CommentsService } from '../../shared/comments.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  @Input() posts: Post[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
  @Input() comments: Comment[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    // this.getComments();
  }

  // getComments() {
  //   this.commentsService.getAllComments().subscribe(res => this.comments = res);
  // }
}
