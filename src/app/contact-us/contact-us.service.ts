import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }
  
  header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json', 
      'Authorization': `Bearer 751|D7ff7VTpeZr18YUjOsvdwiHuG8t7XSJpWB2ib0xE`})
  }

  addProduct(data: any): Observable<any>{
    return this.http.post<any>(environment.API_URL + `api/products`, data, this.header);
  }

  getProducts(): Observable<any>{
    return this.http.get(environment.API_URL + `api/products`, this.header);
  }

  getProduct(id: number): Observable<any>{
    return this.http.get(environment.API_URL + `api/products/${id}`, this.header);
  }

  deleteProduct(id: number){
    return this.http.delete(environment.API_URL + `api/products/${id}`, this.header)
  }

  updateProduct(data: any, id: number): Observable<any>{
    return this.http.put(environment.API_URL + `api/products/${id}`, data, this.header)
  }
}
