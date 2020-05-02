import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { UserAuth } from '../../shared/model/user';
import { MessageService } from '../../shared/components/message/message.service';

@Injectable({ providedIn: 'root' })
export class RegisterService {

  private userUrl : string = "api/v1/users/signup";

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  save(user: UserAuth) {
    return this.httpClient.post<UserAuth>(this.userUrl, JSON.stringify(user))
      .pipe(
        tap(_ => this.messageService.success("User signup successfully."))
      );
  }
}
