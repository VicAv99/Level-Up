import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE = 'https://api.openaq.org/v1/locations';

@Injectable()
export class QualityService {

  constructor(private http: HttpClient) { }

  getPhoenixLocation(phx = 'Phoenix') {
    let params = new HttpParams();
    params = params.append('city', phx)

    return this.http.get(BASE)
      .pipe(map(res => res));
  }

}
