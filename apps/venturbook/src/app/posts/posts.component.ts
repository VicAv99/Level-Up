import { Component, OnInit } from '@angular/core';
import { PostsService } from '../shared/posts.service';
import { Post } from '../shared/post';
import { Comment } from "../shared/comment";
import { CommentsService } from '../shared/comments.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  currentPost: Post;
  comments: Comment[];

  constructor(private postService: PostsService,
              private commentsService: CommentsService) { }

  ngOnInit() {
    this.getAllPosts();
    this.reset();
  }

  getAllComments() {
    this.commentsService.getAllComments().subscribe(res => this.comments = res);
  }

  getAllPosts() {
    this.postService.allPosts()
      .subscribe(posts => this.posts = posts);
  }

  selectPost(post) {
    this.currentPost = post;
    this.postService.post(post)
      .subscribe(res => console.log("RES", res));
  }

  reset() {
    this.currentPost = {
      id: null,
      content: '',
      username: '',
      comments: []
    }
  }

  cancel(post) {
    this.reset();
  }

  savePost(post) {
    !post.id ? this.createPost(post) : this.updatePost(post);
  }

  createPost(post) {
    this.postService.create(post)
      .subscribe(posted => {
        this.posts.push(post);
        this.getAllPosts();
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
      .subscribe(posted => {
        this.getAllPosts();
        this.reset();
    });
  }
}
