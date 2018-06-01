import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Post } from '../shared/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post;

  constructor(private postService: PostsService) { }

  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.postService.allPosts()
      .subscribe(posts => this.posts = posts);
  }

  selectedPost(post) {
    this.currentPost = post;
  }

  saved(post) {
    !post.id ? this.createPost(post) : this.updatePost(post);
  }

  createPost(post) {
    this.postService.create(post)
      .subscribe(posted => {
        this.posts.push(post)
        this.reset();
      });
  }

  updatePost(post) {
    this.postService.update(post)
      .subscribe(res => {
        this.getAllPosts();
        this.reset();
      });
  }

  deletePost(post) {
    this.postService.delete(post.id)
      .subscribe(posted => this.getAllPosts());
  }

  cancel(post) {
    this.reset();
  }

  reset() {
    this.currentPost = {
      id: null,
      content: '',
      username: '',
      comments: []
    }
  }

}
