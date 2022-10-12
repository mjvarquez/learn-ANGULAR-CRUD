import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private token: TokenStorageService,
    private router: Router) { }

  logOut(){
    this.token.signOut()
    this.router.navigate(['/login'])
  }

  ngOnInit(): void {
  }

}
