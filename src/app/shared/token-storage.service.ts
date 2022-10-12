import { Injectable } from '@angular/core';

const token_key = 'auth-token'
const user_key = 'auth-user'

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() {}

  signOut(): void{
    window.sessionStorage.clear()
  }

  saveToken(token: string): void {
    window.sessionStorage.removeItem(token_key);
    window.sessionStorage.setItem(token_key, token);
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(token_key);
  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(user_key);
    window.sessionStorage.setItem(user_key, JSON.stringify(user));
  }

  getUser(): any {
    const user = window.sessionStorage.getItem(user_key);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }
}
