import { Component, OnInit} from '@angular/core';
import { RegisterService } from './register.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserForm!: FormGroup;

  getRegisterForm(){
    this.registerUserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required]
    })
  }

  registerUser(){
    this.registerService.getRegisterUser(this.registerUserForm.value).subscribe((data) => {
      alert('Register Successfully!')
      this.registerUserForm.reset()
      this.router.navigate(['login'])
      console.log(data)
    }, err => {
      alert('Something went Wrong!')
    })
  }


  constructor(private registerService: RegisterService, 
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.getRegisterForm()
  }

}
