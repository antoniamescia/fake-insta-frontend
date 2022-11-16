import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Post } from '../models/post.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private postUrl = 'http://localhost:5000/api/posts';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getPosts(): Observable<[]> {        
    return this.http.get<[]>(this.postUrl);
  }

  postPost(data: any) {
    return this.http.post<any>(this.postUrl, data);
  }

  getPostById(id: number): Observable<Post> {
    const url = `${this.postUrl}/${id}`;
    return this.http.get<Post>(url);
  }
}
