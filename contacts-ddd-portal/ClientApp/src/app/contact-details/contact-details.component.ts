import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../model/Contact';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  @Input() contact : Contact;

  constructor(private route: ActivatedRoute,
    private contactService: ContactService,
    private location: Location) { }

  ngOnInit(): void {
    this.getContact();
  }

  getContact(): void {
    const id =+ this.route.snapshot.paramMap.get('id');
    this.contactService
      .getContact(id)
      .subscribe(contact => this.contact = contact);
  }

  goBack(): void {
    this.location.back();
  }

}
