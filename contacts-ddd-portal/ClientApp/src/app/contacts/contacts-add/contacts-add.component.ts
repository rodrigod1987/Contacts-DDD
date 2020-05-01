import { Component, OnInit, Input } from '@angular/core';
import { Contact } from 'src/app/shared/model/contact';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/contacts/contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacts-add',
  templateUrl: './contacts-add.component.html',
  styleUrls: ['./contacts-add.component.css']
})
export class ContactsAddComponent implements OnInit {

  form: FormGroup;
  private contact: Contact;

  constructor(private fb: FormBuilder,
    private contactService: ContactService,
    private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  save(): void {
    let contact = this.form.getRawValue() as Contact;
    this.contactService
      .save(contact)
      .subscribe(contact => {
        this.contact = contact;
        this.route.navigate(['contacts/edit', this.contact.id]);
      });
  }

  goBack(): void {
    this.route.navigate(['/contacts']);
  }

}
