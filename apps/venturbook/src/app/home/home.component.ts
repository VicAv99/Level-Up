import { Component, OnInit, Input } from '@angular/core';
import { Post } from "../shared/post";
import { PostsService } from '../shared/posts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() posts: Post[];

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postService
      .allPosts()
      .subscribe(res => this.posts = res);
  }

}
