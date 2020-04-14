import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phone } from '../model/Phone';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { tap, catchError, map, mapTo } from 'rxjs/operators';
import { HandleError } from "../handlers/handle-error";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  private phonesUrl: string = `api/v1/phones`;

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private route: Router,
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

  save(phone: Phone) :void {
    this.http.post(this.phonesUrl, JSON.stringify(phone))
      .pipe(
        tap(_ => this.messageService.log(`Phone was added successfully.`)),
        catchError(this.error.handle('save'))
      )
      .subscribe((p: Phone) => {
        phone = p;
        this.route.navigate([`/contacts/edit/${phone.contact.id}`]);
      });
  }

  edit(phone: Phone) : void {
    this.http.put(`${this.phonesUrl}/${phone.id}`, JSON.stringify(phone))
    .pipe(
      tap(_ => this.messageService.log(`Phone was edited successfully.`)),
      catchError(this.error.handle('edit'))
    )
    .subscribe((p: Phone) => {
      phone = p;
      this.route.navigate([`/contacts/edit/${phone.contact.id}`]);
    });
  }

  delete(id: number) : void {
    this.http.delete(`${this.phonesUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.log(`Phone was deleted successfully.`))
      )
      .subscribe(() => {
        location.reload();
      });
  }
}
