import { UserService } from './../../../services/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css']
})
export class ProfileViewComponent implements OnInit {

  users: User[] | any = [];

  @Input() user: User = {
    firstName: '',
    lastName: '',
    username: '',
    profilePictureUrl: '',
    posts: [],
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.selectRandomUser();
  }

  selectRandomUser() {
    this.userService.getUsers().subscribe(data => {
      // Save the users in the users array
      const values = Object.values(data);
      this.users = values[0];
      // Select a random user
      this.user = this.users[Math.floor(Math.random() * this.users.length)];      
    })

  }

}
