import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
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

  save(userName: string, password: string) {
    return this.httpClient.post<User>(this.userUrl, JSON.stringify({userName, password}))
      .pipe(
        tap(_ => this.messageService.log("User signup successfully.")),
        catchError(this.handleError.handle<User>('save'))
      );
  }
}
