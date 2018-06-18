import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE = 'https://www.googleapis.com/books/v1/volumes';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  searchBooksApi(str) {
    let params = new HttpParams();
    params = params.append('q', str);
    return this.http.get<any>(`${BASE}`, { params })
      .pipe(map(res => res));
  }

}
