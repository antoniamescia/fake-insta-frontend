import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.css']
})
export class SearchViewComponent implements OnInit {

  results: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.showResults(this.results);
  }

  showResults(result: Post[]) {
    this.results = result;
    console.log('results',this.results);
    
  }

}
