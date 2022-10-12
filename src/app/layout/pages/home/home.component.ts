import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/hero';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  users: User[] = [];
  admins: User[] = [];

  getUsers(){
    this.users = this.userService.getUsers();
    
  }
  getAdmins(){
    this.admins = this.userService.getAdmins();
  }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
