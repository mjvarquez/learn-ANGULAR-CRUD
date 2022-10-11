import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

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

  loginUserForm!: FormGroup;

  getLoginForm(){
    this.loginUserForm = this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    })
  }

  loginUser(){
    this.loginService.getLoginUser(this.loginUserForm.value).subscribe((data) =>{
      alert('Login Successfully!')
      this.loginUserForm.reset()
      this.router.navigate(['home'])
      console.log(data)
    }, err => {
      alert('Something went wrong!')
    })
  }

  constructor(private loginService: LoginService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.getLoginForm()
  }

}
