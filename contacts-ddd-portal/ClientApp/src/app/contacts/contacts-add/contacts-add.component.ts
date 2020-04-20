import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/shared/model/contact';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {

  @Input() public contact: Contact = {
    id : 0,
    name : '',
    phones : []
  };

  constructor(private contactService: ContactService,
    private route: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.contactService
      .save(this.contact)
      .subscribe(contact => {
        this.contact = contact;
        this.route.navigate(['contacts/edit', this.contact.id]);
      });
  }

  goBack(): void {
    this.route.navigate(['/contacts']);
  }

}
