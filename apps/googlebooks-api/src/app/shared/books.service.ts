import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

const BASE = 'https://www.googleapis.com/books/v1/volumes?q=search+terms';

@Injectable()
export class BooksService {

  constructor(private http: HttpClient) { }

  searchBooksApi(str = 'Charity') {
    let params = new HttpParams();
    params = params.append('q', str);

    return this.http.get(`${BASE}`, {params})
      .subscribe(res => res);
  }

}
