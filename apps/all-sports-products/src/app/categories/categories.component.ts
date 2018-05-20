import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;
  subs: any;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe(category => this.categories = category);
    this.categoriesService.getCategories()
      .subscribe(subs => this.subs = subs
        .map(res => res.Children
          .map(nth => nth.Name)));
  }

}
