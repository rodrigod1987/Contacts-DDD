import { Component, OnInit, TemplateRef, AfterViewInit } from '@angular/core';
import { Contact } from '../../shared/model/Contact';
import { ContactService } from '../../shared/services/contact.service';
import { PagerService } from 'src/app/shared/services/pager.service';
import { Page } from 'src/app/shared/model/Page';
import { Pager } from 'src/app/shared/model/Pager';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private pageResponse : Page<Contact>;

  // pager object
  pager: Pager;

  // paged items
  pagedItems: any[];

  constructor(private contactService: ContactService,
    private pagerService: PagerService) { }

  ngOnInit(): void {
    this.getContacts();
  }

  getContacts(page: number = 0) : void {
    this.contactService
      .getContacts(page)
      .subscribe((response) => {
        this.pageResponse = response;

        // initialize to page 0
        this.setPage(page);
      }, (error) => {
        console.log(error)
      });
  }

  delete(id: number) : void {
    this.contactService
      .delete(id);
  }

  setPage(page: number) {
    // get pager object from service
    this.pager = this.pagerService.getPager(this.pageResponse.totalPages, this.pageResponse.totalElements, page, this.pageResponse.size);

    // get current page of items
    this.pagedItems = this.pageResponse.content;
  }

  selectedPage(page: number) {
    if (this.pageResponse.number !== page) {
      this.getContacts(page);
    }
  }

  nextPage() {
    if (this.pageResponse && !this.pageResponse.last)
      this.getContacts(this.pager.currentPage + 1);
  }

  priorPage() {
    if (this.pageResponse && !this.pageResponse.first)
      this.getContacts(this.pager.currentPage - 1);
  }

  firstPage() {
    if (this.pageResponse && !this.pageResponse.first)
      this.getContacts(0);
  }

  lastPage() {
    if (this.pageResponse && !this.pageResponse.last)
      this.getContacts(this.pager.totalPages - 1);
  }

}
