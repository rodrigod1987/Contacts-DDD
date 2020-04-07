import { Component, OnInit, TemplateRef } from '@angular/core';
import { Contact } from '../../shared/model/Contact';
import { ContactService } from '../../shared/services/contact.service';
import { Location } from '@angular/common';

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
      .subscribe(contacts => this.contacts = contacts);
  }

  delete(id: number) : void {
    this.contactService
      .delete(id);
  }

}
