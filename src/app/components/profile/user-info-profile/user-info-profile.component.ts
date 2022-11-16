import { UserService } from './../../../services/user.service';
import { User } from 'src/app/models/user.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info-profile',
  templateUrl: './user-info-profile.component.html',
  styleUrls: ['./user-info-profile.component.css']
})
export class UserInfoProfileComponent implements OnInit {

  users: User[] = [];

  @Input() user: User = {
    firstName: '',
    lastName: '',
    username: '',
    profilePictureUrl: '',
    posts: [],
  };


  constructor(private userService: UserService) { }

  ngOnInit(): void {

  }
}
