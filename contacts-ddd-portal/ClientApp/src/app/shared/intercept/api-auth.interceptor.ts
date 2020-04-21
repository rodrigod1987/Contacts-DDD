import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      // add authorization header with jwt token if available
      if (this.tokenService.hasToken()) {
          request = request.clone({
              setHeaders: {
                  'Authorization': `Bearer ${this.tokenService.getToken()}`
              }
          });
      }

      return next.handle(request);
    }
}
