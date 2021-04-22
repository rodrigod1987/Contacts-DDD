import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { BehaviorSubject } from 'rxjs';
import { UserAuth } from '../../shared/model/user.auth';
import * as jwt_decode from 'jwt-decode';

@Injectable({ providedIn: 'root' })
export class UserAuthService {

  private userSubject = new BehaviorSubject<UserAuth>(null);

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

  getUsername() {
    const user = this.decode();
    return user.username;
  }

  logout() : void {
    this.tokenService.removeToken();
    this.userSubject.next(null);
  }

  isLogged() : boolean {
    return this.tokenService.hasToken();
  }

  private decode() {
    const token = this.tokenService.getToken();
    const user = jwt_decode(token) as UserAuth;

    return user;
  }

  private decodeAndNotify() {
    const user = this.decode();
    this.userSubject.next(user);
  }

}
