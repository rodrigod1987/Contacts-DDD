import { Component, OnInit, TemplateRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Contact } from '../../shared/model/Contact';
import { ContactService } from '../../shared/services/contact.service';
import { PagerService } from '../../shared/services/pager.service';
import { Page } from '../../shared/model/Page';
import { Pager } from '../../shared/model/Pager';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  filter: string = '';
  debounce: Subject<string> = new Subject<string>();

  private pageResponse : Page<Contact>;

  // pager object
  pager: Pager;

  // paged items
  pagedItems: Contact[];

  constructor(private contactService: ContactService,
    private pagerService: PagerService) { }

  ngOnInit(): void {
    this.getContacts();
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getContacts(page: number = 0) : void {
    this.contactService
      .getContacts(page)
      .subscribe((response) => {
        this.pageResponse = response;
      }, (error) => {
        console.log(error)
      },
      () => {
        // initialize to page 0
        this.setPage(page);
      });
  }

  delete(id: number) : void {
    this.contactService
      .delete(id)
      .subscribe(() => { location.reload() });
  }

  setPage(page: number) {
    this.pager = this.pagerService
      .getPager(this.pageResponse.totalPages,
        this.pageResponse.totalElements,
        page,
        this.pageResponse.size);

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

  isLastPage() : boolean {
    return this.pager.currentPage === this.pager.totalPages - 1;
  }

  isFirstPage() : boolean {
    return this.pager.currentPage === 0;
  }

}
