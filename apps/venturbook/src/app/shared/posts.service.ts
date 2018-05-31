import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const HERO = 'https://levelup-json.herokuapp.com/posts';

@Injectable()
export class PostsService {

  constructor(private http: HttpClient) { }

  getPostsHeroku() {
    return this.http.get<any>(`${HERO}`)
      .pipe(map(res => res));
  }

}
