import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../shared/comments.service';
import { Comment } from "../shared/comment";
import { Post } from "../shared/post";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: Post[];
  selectedComment: Post;

  constructor(private commentsService: CommentsService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments() {
    this.commentsService.getAllComments().subscribe(res => this.comments = res);
  }

}
