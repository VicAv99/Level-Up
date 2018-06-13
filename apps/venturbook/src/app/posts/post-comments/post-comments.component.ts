import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../shared/comment';
import { CommentsService } from '../../shared/comments.service';

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
  comments: Comment[];

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
  }

  getComments() {
    this.commentsService.getAllComments().subscribe(res => res);
  }

}
