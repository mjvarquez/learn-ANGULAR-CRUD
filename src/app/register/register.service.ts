import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getRegisterUser(data: any): Observable<any>{
    return this.http.post<any>(environment.API_URL + `api/register`, data)
  }
}
