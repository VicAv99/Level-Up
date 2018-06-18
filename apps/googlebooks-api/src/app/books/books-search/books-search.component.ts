import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-books-search',
  templateUrl: './books-search.component.html',
  styleUrls: ['./books-search.component.css']
})
export class BooksSearchComponent {
  @Output() search = new EventEmitter();
}
