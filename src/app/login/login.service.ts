import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TokenStorageService } from '../shared/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient, 
    private token: TokenStorageService) { }

  getLoginUser(data: any){
    return this.http.post<any>(environment.API_URL + `api/login`, data)
  }

  isLoggedIn(){
    return this.token.getToken()!=null;
  }
}
