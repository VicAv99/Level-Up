import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { footapi } from '../../../../../secret/apis';

const BASE = 'https://api.football-data.org';

@Injectable()
export class FootballService {

  constructor(private http: HttpClient) { }

  private buildHeaders() {
    let headers = new HttpHeaders();
    headers = headers.append('X-Auth-Token', `${footapi}`);
    return headers;
  }

  competitions() {
    const url = `${BASE}/v1/competitions`;
    const headers = this.buildHeaders();
    return this.http.get<any>(url, { headers })
      .pipe(map(res => res));
  }

  teams(id) {
    const url = `${BASE}/v1/competitions/${id}/teams`;
    const headers = this.buildHeaders();
    return this.http.get<any>(url, { headers })
      .pipe(map(res => res));
  }

}

