import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/shared/model/Contact';
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
    private navigation: Router) { }

  ngOnInit(): void {
  }

  save(): void {
    this.contactService.save(this.contact);
  }

  goBack(): void {
    this.navigation.navigate(['/contacts']);
  }

}
