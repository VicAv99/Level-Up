import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE = 'https://itunes.apple.com/search?';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  searchItunes(str: string) {
    let params = new HttpParams;
    params = params.append('term', str);
    return this.http.get(BASE, {params})
      .pipe(map(res => res));
  }

}
