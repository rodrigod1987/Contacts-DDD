import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserAuthService } from './user-auth.service';
import { UserAuth } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationUrl : string = "api/v1/auth/authenticate";

  constructor(private httpClient: HttpClient,
    private userService: UserAuthService) {
  }

  login(user: UserAuth) {

    return this.httpClient
      .post(this.authenticationUrl,
        JSON.stringify(user),
        { responseType:  "text" })
      .pipe(
        tap(token => this.userService.setToken(token))
      );

  }

}
