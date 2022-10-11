import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let userToken = req.clone({
      setHeaders: {
        Authorization : 'Bearer xx.yy.zz'
      }
    })
    return next.handle(userToken)
  }
  constructor() { }
}
