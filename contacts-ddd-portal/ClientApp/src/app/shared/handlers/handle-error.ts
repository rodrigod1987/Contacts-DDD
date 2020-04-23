import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from '../services/message.service';
import { UserAuthService } from '../services/user-auth.service';

const UNAUTHORIZED = 'Unauthorized';

@Injectable({
  providedIn: 'root'
})
export class HandleError {
  constructor(private router: Router,
    private userService: UserAuthService,
    private messageService: MessageService) { }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  public handle<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption


      if (error === UNAUTHORIZED) {
        this.messageService.info("Your session expired, please login again!");

        this.userService.logout();
        this.router.navigate(['/not-found'], { queryParams: { returnUrl: this.router.routerState.snapshot.url }});
      }
      else {
        this.messageService.danger(`${operation} failed: ${error.message}`);
      }

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
