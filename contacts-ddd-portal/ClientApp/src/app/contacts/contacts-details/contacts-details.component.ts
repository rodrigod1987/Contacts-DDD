import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../shared/model/Contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../shared/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contacts-details.component.html',
  styleUrls: ['./contacts-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contact : Contact;

  constructor(private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private route: Router) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id =+ this.activatedRoute.snapshot.paramMap.get('id');
    this.contactService
      .getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  edit() : void {
    debugger;
    this.contactService.edit(this.contact);
  }

  goBack(): void {
    this.route.navigate(['/contacts']);
  }

}
