import { Component, OnInit } from '@angular/core';
import { BooksService } from '../shared/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  searchStr: string;
  searchRes;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
  }

  searchBooks(srch) {
    this.booksService.searchBooksApi(srch)
      .subscribe(res => this.searchRes = res.items);
  }

}
