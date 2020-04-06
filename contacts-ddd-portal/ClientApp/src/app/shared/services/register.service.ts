import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { tap, catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { HandleError } from '../handlers/handle-error';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private userUrl : string = "api/v1/users/signup";

  constructor(private httpClient: HttpClient,
    private messageService: MessageService,
    private handleError: HandleError,
    private router: Router) { }

  save(user: User) {
    return this.httpClient.post<User>(this.userUrl, JSON.stringify(user))
      .pipe(
        tap(_ => this.messageService.log("Usuário registrado com sucesso.")),
        catchError(this.handleError.handle<User>('save')))
      .subscribe(() => { this.router.navigate(['/home'])})
  }
}
