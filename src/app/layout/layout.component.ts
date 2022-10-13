import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../shared/token-storage.service';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private token: TokenStorageService,
    private router: Router,
    private loginService: LoginService) { }
  
  onLogout(){
    this.loginService.logOut()
  }

  ngOnInit(): void {
    this.loginService.autoLogout()
  }

}
