import { Post } from './../../../models/post.model';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {

  @Input() post: Post = {
    imageUrl: '',
    postedBy: '',
    caption: '',
    searchTerm: '',
  }

  safeUrl: SafeUrl = '';

  constructor(private sanitizer: DomSanitizer) {
    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.post.imageUrl as string);
   }

  ngOnInit(): void {
    console.log('image', this.post?.imageUrl);
    console.log('safe url', this.safeUrl);        
  }

}
