import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  header = {
    headers: new HttpHeaders({
      'Content-type': 'application/json', 
      })
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
