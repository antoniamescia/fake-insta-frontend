import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserService } from './../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() postedBy?: string;
  user: User = {
    firstName: '',
    lastName: '',
    username: '',
    profilePictureUrl: '',
    posts: []
  };

  safeUrl: SafeUrl = '';

  constructor(private userService: UserService, private sanitizer: DomSanitizer) {

    this.safeUrl = this.sanitizer.bypassSecurityTrustUrl(this.user.profilePictureUrl as string);
   }

  ngOnInit(): void {
   this.getUserById(this.postedBy);     
  }

  getUserById(id: string | undefined): void {
    this.userService.getUserById(id).subscribe(data => {
      const user = Object.values(data)[0];
      this.user = user;
    })};
  

  



}
