import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/Contact';
import { ContactService } from '../services/contact.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts() : void {
    this.contactService
      .getContacts()
      .subscribe(contacts => this.contacts = contacts.slice(1, 5));
  }

}
