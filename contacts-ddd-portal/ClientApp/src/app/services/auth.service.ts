import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { MessageService } from './message.service';
import { catchError, tap, map } from 'rxjs/operators';
import { AuthenticationToken } from '../model/Token';
import { Observable, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  authenticationUrl : string = "api/v1/auth/authenticate";
  private currentUserSubject: BehaviorSubject<User>;
  private currentUser: Observable<User>;

  constructor(private httpClient: HttpClient, 
    private messageService: MessageService) { 
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
        tap(_ => this.messageService.log(`AuthService: fetched contact with username ${userName}.`)),
        catchError(this.handleError<User>(`login username=${userName}`)),
        map(u => {
        if (u && u.token) {
          localStorage.setItem('currentUser', JSON.stringify(u));
          this.currentUserSubject.next(u);
        }

        return u;
      }));

  }

  logout() {
    this.messageService.log(`AuthService: removed user ${this.getCurrentUser()}`)
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  getCurrentUser() : User {
    return this.currentUserSubject.value;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.log(`ContactService: ${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
