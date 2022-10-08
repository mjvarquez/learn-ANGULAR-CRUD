import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { ADMINS, USERS } from './mock-heroes';
import { User } from './hero';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  mock_url: string = "/assets/data/users.json"
  constructor(private http: HttpClient) { }

  getMockUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.mock_url);
  }

  getUsers(): User[] {
    return USERS; 
  }

  getAdmins(): User[]{
    return ADMINS;
  }
}
