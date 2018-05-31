import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post: Post[];
  currentPost: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.getPostsHeroku()
      .subscribe(post => this.post = post);
  }

}
