import { Component, OnInit } from '@angular/core';
import { SearchService } from '../shared/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  searchRes: any;

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  search() {
    this.searchService
      .searchItunes(this.searchStr)
      .subscribe(res => this.searchRes = res);
  }

}

