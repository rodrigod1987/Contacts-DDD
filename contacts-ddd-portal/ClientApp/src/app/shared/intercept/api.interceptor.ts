import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor(@Inject('BASE_API_URL') private apiUrl: string) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiReq = request.clone({
      url: `${this.apiUrl}/${request.url}?page=0&size=100`,
      setHeaders: {
        'Content-Type': 'application/json'
      }
    });

    return next.handle(apiReq);
  }
}
