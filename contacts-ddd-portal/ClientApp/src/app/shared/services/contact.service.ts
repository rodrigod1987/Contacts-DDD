import { Injectable } from '@angular/core';
import { Contact } from '../model/Contact';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { HandleError } from '../handlers/handle-error';
import { Router } from '@angular/router';
import { Page } from '../model/Page';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl: string = `api/v1/contacts`;

  constructor(private httpClient: HttpClient,
    private messageService: MessageService,
    private handleError: HandleError,
    private router: Router) { }

  getContact(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.contactsUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.log(`ContactService: fetched contact with id ${id}.`)),
        catchError(this.handleError.handle<Contact>(`getContact id=${id}`))
      );
  }

  getContacts(page: number = 0): Observable<Page<Contact>> {
    return this.httpClient.get<Page<Contact>>(`${this.contactsUrl}?page=${page}`)
      .pipe(
        tap(_ => this.messageService.log("ContactService: fetched all rows from server.")),
        catchError(this.handleError.handle<Page<Contact>>('getContacts'))
      );
  }

  save(contact: Contact) : void {
    this.httpClient.post<Contact>(this.contactsUrl, JSON.stringify(contact))
      .pipe(
        tap(_ => this.messageService.log("Contact included succesfully.")),
        catchError(this.handleError.handle<Contact>("save")))
      .subscribe(x => {
        contact = x;
        this.router.navigate(['/contacts']);
      });
  }

  edit(contact: Contact) : void {
    this.httpClient.put<Contact>(`${this.contactsUrl}/${contact.id}`, JSON.stringify(contact))
      .pipe(
        tap(_ => this.messageService.log("Contact edited succesfully.")),
        catchError(this.handleError.handle<Contact>("edit")))
      .subscribe(x => {
        contact = x;
        this.router.navigate(['/contacts']);
      });
  }

  delete(id: number) : void {
    this.httpClient.delete<any>(`${this.contactsUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.log(`Contact ${id} removed successfully.`)),
        catchError(this.handleError.handle<Contact>("delete")))
      .subscribe(() => { location.reload() });
  }

}
