import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  onSubmit(data: NgForm){
    console.log(data);
    this.registerService.getRegisterUser(data).subscribe((data) => {
      console.log(data)
    })
  }

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
  }

}
