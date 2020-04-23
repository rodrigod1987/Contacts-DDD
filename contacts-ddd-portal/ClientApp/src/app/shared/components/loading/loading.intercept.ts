import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LoadingIntercept implements HttpInterceptor {

  constructor(private loadingService: LoadingService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    return next
      .handle(req)
      .pipe(tap(httpEvent => {

        if(httpEvent instanceof HttpResponse) {
          this.loadingService.stop()
        } else {
          this.loadingService.start();
        }

      }));

  }

}
