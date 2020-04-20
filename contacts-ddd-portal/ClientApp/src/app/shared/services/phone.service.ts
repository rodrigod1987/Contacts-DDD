import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../model/phone';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { tap, catchError, map, mapTo } from 'rxjs/operators';
import { HandleError } from "../handlers/handle-error";
import { Router } from '@angular/router';
import { PhoneType } from '../enums/phone-type';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phonesUrl: string = `api/v1/phones`;

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private error: HandleError) { }

  getPhones(contactId: string): Observable<Phone[]> {
    return this.http.get<Phone[]>(`${this.phonesUrl}?contactId=${contactId}`)
      .pipe(
        catchError(this.error.handle("getPhones", []))
      );
  }

  getPhone(id: number) : Observable<Phone> {
    return this.http.get<Phone>(`${this.phonesUrl}/${id}`)
      .pipe(
        catchError(this.error.handle<Phone>('getPhone'))
      );
  }

  save(phone: Phone) {
    return this.http.post(this.phonesUrl, JSON.stringify(phone))
      .pipe(
        tap(_ => this.messageService.log(`Phone was added successfully.`)),
        catchError(this.error.handle('save'))
      );
  }

  edit(phone: Phone) {
    return this.http.put(`${this.phonesUrl}/${phone.id}`, JSON.stringify(phone))
    .pipe(
      tap(_ => this.messageService.log(`Phone was edited successfully.`)),
      catchError(this.error.handle('edit'))
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.phonesUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.log(`Phone was deleted successfully.`))
      );
  }

  getPhoneTypes() : Array<string> {
    var keys = Object.keys(PhoneType);
    return keys.slice(keys.length / 2);
  }
}
