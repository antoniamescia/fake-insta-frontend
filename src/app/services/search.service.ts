import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AnyMessageParams } from 'yup/lib/types';
import { Post } from '../models/post.model';
import { ImageService } from './image.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = 'http://localhost:5000/api/posts/search/';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient, private imageService: ImageService) { }


  searchImages(term: string): Observable<any> {
    return this.http.get<any>(this.url+term);
    
  }

}
