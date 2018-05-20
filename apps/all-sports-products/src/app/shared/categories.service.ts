import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

const InksoftCategories = 'https://allsportsteamstores.net/TeamStores/Api2/GetProductCategories?Format=JSON&GetProductIds=true';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(InksoftCategories)
      .pipe(map(res => res.Data));
  }

}
