import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';

import { UserAuth } from '../../shared/model/user.auth';
import { MessageService } from '../../shared/components/message/message.service';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RegisterService {

  private userUrl : string = "api/v1/users/signup";

  constructor(private httpClient: HttpClient,
    private router: Router,
    private messageService: MessageService,
    private loadingService: LoadingService) { }

  save(user: UserAuth) {
    return this.httpClient.post(this.userUrl, JSON.stringify(user))
      .pipe(
        catchError(err => {
          this.messageService.danger(err.error.message);
          this.loadingService.stop();

          return of();
        })
      )
      .pipe(
        tap(_ => this.messageService.success("User signup successfully! Verify your inbox mail to complete your registration.")),
        map(_ => this.router.navigate['/home'])
      );
  }
}
