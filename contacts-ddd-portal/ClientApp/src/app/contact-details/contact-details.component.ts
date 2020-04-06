import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../shared/model/Contact';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../shared/services/contact.service';
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
    private navigation: Router) { }

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
    this.navigation.navigate(['/contacts']);
  }

}
