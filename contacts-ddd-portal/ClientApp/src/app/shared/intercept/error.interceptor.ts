import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      debugger;
      return next.handle(request)
        .pipe(catchError(err => {
          debugger;

          if (err.status === 401) {
              // auto logout if 401 response returned from api
              this.userService.logout();
          }

          const error = err.error.message || err.error || err.statusText;
          return throwError(error);
        }));
    }
}
