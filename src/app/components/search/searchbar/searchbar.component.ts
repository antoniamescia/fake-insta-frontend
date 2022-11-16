import { SearchService } from './../../../services/search.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  
  @Output() event = new EventEmitter<Post[]>();

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  searchImages(term: string) {
    this.searchService.searchImages(term).subscribe((data) => {
      const searchResults = data['posts'];
      console.log(searchResults);   
      this.event.emit(searchResults);

    });
  }


}
