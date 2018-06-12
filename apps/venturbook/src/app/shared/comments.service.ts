import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE = 'https://levelup-json.herokuapp.com/posts';

@Injectable()
export class CommentsService {

  constructor(private http: HttpClient) { }

  getAllComments() {
    return this.http.get<any>(BASE).pipe(map(res => res));
  }

}
