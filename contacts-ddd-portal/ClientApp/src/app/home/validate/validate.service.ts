import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { MessageService } from 'src/app/shared/components/message/message.service';

@Injectable({providedIn: 'root'})
export class ValidateService {
    
    private validateUrl : string = "api/v1/users/signupConfirmation?token=";

    constructor(private httpClient: HttpClient,
      private messageService: MessageService){}
    
    activateUser(token: string) {
      return this.httpClient.get(this.validateUrl+token, {responseType:"text"})
      .pipe(
        tap(_ => this.messageService.success("User activated succesfully!"))
      );
    }

}