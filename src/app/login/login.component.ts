import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json', 
      'Authorization': `Bearer 751|D7ff7VTpeZr18YUjOsvdwiHuG8t7XSJpWB2ib0xE`})
  }

  onSubmit(data: NgForm){
    console.log(data);
    this.loginService.getLoginUser(data).subscribe((data) => {
      this.header = {
        headers: new HttpHeaders({
          'Content-type': 'application/json', 
          'Authorization': `Bearer ${data.token}`})
      }
      console.log(data)
    })
  }

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

}
