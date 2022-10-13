import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../shared/token-storage.service';
import { Router } from '@angular/router';
import { User } from '../models/hero';
import { Subject } from 'rxjs';

export interface AuthResponsData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private tokenExpirationTimer: any;
  user = new Subject<User>();

  constructor(private http: HttpClient, 
    private token: TokenStorageService,
    private router: Router) { }

  getLoginUser(data: any){
    return this.http.post<any>(environment.API_URL + `api/login`, data)
  }

  isLoggedIn(){
    return this.token.getToken()!=null;
  }

  getUserToken(){
    return this.token.getToken()!=null;
  }
  
  autoLogin(){
    if(this.getUserToken()){
      this.router.navigate(['home'])
      return true
    }else {
      return false
    }
  }

  logOut(){
    this.token.signOut()
    this.router.navigate(['/login'])
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer)
    }
  }

  autoLogout(){
    this.tokenExpirationTimer = setTimeout(() => {
      this.logOut();
      this.router.navigate(['/login'])
    }, 10000)
  }
}
