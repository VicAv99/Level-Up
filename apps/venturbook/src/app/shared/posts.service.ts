import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';

const HERO = 'https://levelup-json.herokuapp.com/posts';

@Injectable()
export class PostsService {
  constructor(private http: HttpClient) {}

  allPosts() {
    return this.http
      .get<Post[]>(`${HERO}`)
      .pipe(map(res => res));
  }

  post(post: Post) {
    return this.http
      .get<Post>(`${HERO}/${post.id}`)
      .pipe(map(res => res));
  }

  create(post: Post) {
    return this.http
      .post<Post>(`${HERO}`, post)
      .pipe(map(res => res));
  }

  update(post: Post) {
    return this.http
      .patch<Post>(`${HERO}/${post.id}`, post)
      .pipe(map(res => res));
  }

  delete(id: number) {
    return this.http
      .delete<Post>(`${HERO}/${id}`)
      .pipe(map(res => res));
  }
}
