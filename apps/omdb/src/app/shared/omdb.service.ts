import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE = 'http://www.omdbapi.com/?i=tt3896198&apikey=c541c749';

@Injectable()
export class OmdbService {

  constructor(private http: HttpClient) { }

}
