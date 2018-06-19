import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE = 'https://api.openaq.org/v1';

@Injectable()
export class QualityService {

  constructor(private http: HttpClient) { }

  getPhoenixLocation() {
    const url = `${BASE}/locations`;
    let params = new HttpParams();
    params = params.append('limit', '10')
    params = params.append('?city', 'Phoenix')
    params = params.append('?country', 'US')

    return this.http.get<any>(url, { params })
      .pipe(map(res => res));
  }

}
