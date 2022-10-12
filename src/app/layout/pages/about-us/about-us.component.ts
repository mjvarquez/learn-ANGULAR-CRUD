import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../models/hero';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  users: User[] = [] ;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMockUsers()
        .subscribe(data => this.users = data);
  }

}
