import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { map, tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationUrl : string = "api/v1/auth/authenticate";

  constructor(private httpClient: HttpClient,
    private userService: UserService) {
  }

  login(userName: string, password: string) {

    return this.httpClient
      .post(this.authenticationUrl,
        JSON.stringify({userName, password}),
        { responseType:  "text" })
      .pipe(
        tap(token => this.userService.setToken(token))
      );

  }

}
