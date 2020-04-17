import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { debugOutputAstAsTypeScript } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authenticationUrl : string = "api/v1/auth/authenticate";
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private httpClient: HttpClient,
    private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(userName: string, password: string) {
    let user: User = {
      userName: userName,
      password: password,
      token: ''
    }

    return this.httpClient.post<User>(this.authenticationUrl, JSON.stringify(user))
      .pipe(
        map(u => {
          if (u && u.token) {
            localStorage.setItem('currentUser', JSON.stringify(u));
            this.currentUserSubject.next(u);
          }

          return u;
      }));

  }

  logout(url?: string) {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);

    debugger;

    if (url)
      this.router.navigate(["/login"], { queryParams: { returnUrl: url }});
    else
      this.router.navigate(["/home"]);
  }

  getCurrentUser() : User {
    return this.currentUserSubject.value;
  }

}
