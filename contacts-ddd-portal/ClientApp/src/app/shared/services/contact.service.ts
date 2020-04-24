import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Page } from '../model/page';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl: string = `api/v1/contacts`;

  constructor(private httpClient: HttpClient,
    private messageService: MessageService) { }

  getContact(id: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.contactsUrl}/${id}`);
  }

  getContacts(page: number = 0): Observable<Page<Contact>> {
    return this.httpClient.get<Page<Contact>>(`${this.contactsUrl}?page=${page}`);
  }

  save(contact: Contact) {
    return this.httpClient.post<Contact>(this.contactsUrl, JSON.stringify(contact))
      .pipe(
        tap(_ => this.messageService.success("Contact included succesfully."))
      );
  }

  edit(contact: Contact) {
    return this.httpClient.put<Contact>(`${this.contactsUrl}/${contact.id}`, JSON.stringify(contact))
      .pipe(
        tap(_ => this.messageService.success("Contact edited succesfully."))
      );
  }

  delete(id: number) {
    return this.httpClient.delete<any>(`${this.contactsUrl}/${id}`)
      .pipe(
        tap(_ => this.messageService.success(`Contact removed successfully.`))
      );
  }

}
