import { Injectable } from '@angular/core';

const KEY = 'token';

@Injectable({ providedIn: 'root' })
export class TokenService {

  hasToken() : boolean {
    return !!localStorage.getItem(KEY);
  }

  getToken() : string {
    return localStorage.getItem(KEY);
  }

  setToken(token: string) {
    localStorage.setItem(KEY, token);
  }

  removeToken() {
    localStorage.removeItem(KEY);
  }

}
