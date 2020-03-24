import { Injectable } from '@angular/core';
import { CONTACTS } from '../mock/mock-contacts';
import { Contact } from '../model/Contact';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContact(id: number): Observable<Contact> {
    this.messageService.add(`ContactService: fetched contact with id ${id}`);
    return of(CONTACTS.find(contact => contact.id === id))
  }

  constructor(private messageService: MessageService) { }

  getContacts(): Observable<Contact[]> {
    this.messageService.add('ContactService: fetched contacts');
    return of(CONTACTS);
  }

}
