import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Subject } from 'rxjs';
import { User } from '../model/user';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserService {

  private userSubject = new Subject<User>();

  constructor(private tokenService: TokenService) {
    this.tokenService.hasToken() && this.decodeAndNotify();
  }

  setToken (token : string) : void {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser() {
    return this.userSubject.asObservable();
  }

  logout() : void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  private decodeAndNotify() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }

}
