import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserAuth } from '../model/user';
import { tap, catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HandleError } from "../handlers/handle-error";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private userUrl : string = "api/v1/users/signup";

  constructor(private httpClient: HttpClient,
    private messageService: MessageService,
    private handleError: HandleError) { }

  save(user: UserAuth) {
    return this.httpClient.post<UserAuth>(this.userUrl, JSON.stringify(user))
      .pipe(
        tap(_ => this.messageService.success("User signup successfully.")),
        catchError(this.handleError.handle<UserAuth>('save'))
      );
  }
}
