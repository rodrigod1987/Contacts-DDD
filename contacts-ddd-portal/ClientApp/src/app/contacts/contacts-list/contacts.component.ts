import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { Contact } from '../../shared/model/Contact';
import { ContactService } from '../../shared/services/contact.service';
import { PagerService } from 'src/app/shared/services/pager.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private contacts : Contact[];
  pagedContacts : Contact[];

  // pager object
  pager: any = {};

  constructor(private contactService: ContactService, private pagerService: PagerService) { }

  ngOnInit(): void {
    debugger;
    this.getContacts();
  }

  getContacts() : void {
    this.contactService
      .getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;

        // initialize to page 1
        this.setPage(1);
      });
  }

  delete(id: number) : void {
    this.contactService
      .delete(id);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.contacts.length, page);

    // get current page of items
    this.pagedContacts = this.contacts.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

}
