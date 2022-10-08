import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onSubmit(data: NgForm){
    console.log(data);
    this.loginService.getLoginUser(data).subscribe((data) => {
      console.log(data)
    })
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
