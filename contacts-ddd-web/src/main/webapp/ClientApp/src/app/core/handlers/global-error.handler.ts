import { ErrorHandler, Injector, Injectable, NgZone } from '@angular/core';
import * as StackTrace from 'stacktrace-js';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { UserAuthService } from '../auth/user-auth.service';
import { LoadingService } from '../../shared/components/loading/loading.service';
import { MessageService } from '../../shared/components/message/message.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class GlobalErrorHanler implements ErrorHandler {

  constructor(private injector: Injector) {}

  handleError(error: any): void {

    debugger;
    const userService = this.injector.get(UserAuthService);
    const messageService = this.injector.get(MessageService);

    this.redirectAndShowMessage(error, userService, messageService);

    console.log(error);

  }

  private redirectAndShowMessage(error: any,
    userService: UserAuthService,
    messageService: MessageService) {

    const loadingService = this.injector.get(LoadingService);
    const router = this.injector.get(Router);
    const ngZone = this.injector.get(NgZone);

    loadingService.stop();

    if (error.status === 401) {
      messageService.info("Your session has been expired, please login again!");

      userService.logout();
      ngZone.run(() => router.navigate(['/home', 'login'], { queryParams: { returnUrl: router.routerState.snapshot.url }}));
    }
    else {

      if (error.error) {
        error = error.error;
      }

      messageService.danger(`An error ocurred: ${error.message}`);
      ngZone.run(() => router.navigate(['/not-found']));
    }
  }

}
