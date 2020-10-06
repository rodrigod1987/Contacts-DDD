import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserAuthService } from '../auth/user-auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private userService: UserAuthService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      return next.handle(request)
        .pipe(catchError(err => {

          let error = err.error || err.error?.message ;

          if (err.status === 401) {
              // auto logout if 401 response returned from api
              this.userService.logout();
          }

          return throwError(err);
        }));
    }
}
