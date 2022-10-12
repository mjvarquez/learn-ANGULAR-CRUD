import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenStorageService } from './token-storage.service';
import { Observable } from 'rxjs';


const token_header_key = 'Authorization'

@Injectable()
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.token.getToken();
    if (token != null) {
      authReq = req.clone({ headers: req.headers.set(token_header_key, 'Bearer ' + token) });
    }
    return next.handle(authReq);
  }
  constructor(private token: TokenStorageService) { }
}

export const tokenInterceptorService = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }
];
