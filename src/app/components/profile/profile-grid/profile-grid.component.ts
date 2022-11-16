import { ImageService } from 'src/app/services/image.service';
import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-grid',
  templateUrl: './profile-grid.component.html',
  styleUrls: ['./profile-grid.component.css'],
})
export class ProfileGridComponent implements OnInit {
  @Input() user : User = {
    username: '',
    firstName: '',
    lastName: '',
    profilePictureUrl: '',
    posts: [],
  };

  userPosts: Post[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit(): void {
    this.getUserImages(this.user.posts);
    //console.log('user posts', this.userPosts);
    
  }

  getUserImages(postIds: number[]) {
    postIds.forEach((postId) => {
      return this.imageService.getPostById(postId).subscribe((post) => {
        this.userPosts.push(post);
      });
    });
    console.log('user posts', this.userPosts);
    
  }
}
