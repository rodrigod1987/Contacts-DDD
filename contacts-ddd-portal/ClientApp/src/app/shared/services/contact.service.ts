import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleError } from "../handlers/handle-error";
import { Router } from '@angular/router';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl: string = `api/v1/contacts`;

  constructor(private httpClient: HttpClient,
    private messageService: MessageService,
    private handleError: HandleError) { }

  getContact(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.contactsUrl}/${id}`)
      .pipe(
        catchError(this.handleError.handle<Contact>(`getContact id=${id}`))
      );
  }

  getContacts(page: number = 0): Observable<Page<Contact>> {
    return this.httpClient.get<Page<Contact>>(`${this.contactsUrl}?page=${page}`)
      .pipe(
        catchError(this.handleError.handle<Page<Contact>>('getContacts'))
      );
  }

  save(contact: Contact) {
    return this.httpClient.post<Contact>(this.contactsUrl, JSON.stringify(contact))
      .pipe(
        tap(_ => this.messageService.success("Contact included succesfully.")),
        catchError(this.handleError.handle<Contact>("save"))
      );
  }

  edit(contact: Contact) {
    return this.httpClient.put<Contact>(`${this.contactsUrl}/${contact.id}`, JSON.stringify(contact))
      .pipe(
        tap(_ => this.messageService.success("Contact edited succesfully.")),
        catchError(this.handleError.handle<Contact>("edit"))
      );
  }

  delete(id: number) {
    return this.httpClient.delete<any>(`${this.contactsUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.success(`Contact removed successfully.`)),
        catchError(this.handleError.handle<Contact>("delete"))
      );
  }

}
