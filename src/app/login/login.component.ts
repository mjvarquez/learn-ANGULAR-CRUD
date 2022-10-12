import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { TokenStorageService } from '../shared/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm!: FormGroup;

  getLoginForm(){
    this.loginUserForm = this.formBuilder.group({
        email: ['', Validators.email],
        password: ['', Validators.required]
    })
  }

  loginUser(){
      this.loginService.getLoginUser(this.loginUserForm.value).subscribe({
        next: data => {
        alert('Login Successfully!')
        console.log(data.token)
        this.tokenStorage.saveToken(data.token)
        this.tokenStorage.saveUser(data)
        this.loginUserForm.reset()
        this.router.navigate(['home'])
      },
      error: err => {
        alert('Something went wrong!')
        console.log(err.error.message)
      }
    })
  }

  constructor(private loginService: LoginService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.getLoginForm()
  }

}
