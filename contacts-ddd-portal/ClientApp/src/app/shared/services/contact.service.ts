import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleError } from '../handlers/handle-error';

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
        tap(_ => this.messageService.log(`ContactService: fetched contact with id ${id}.`)),
        catchError(this.handleError.handle<Contact>(`getContact id=${id}`))
      );
  }

  getContacts(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(this.contactsUrl)
      .pipe(
        tap(_ => this.messageService.log("ContactService: fetched all rows from server.")),
        catchError(this.handleError.handle<Contact[]>('getContacts', []))
      );
  }

}
