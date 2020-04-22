import { Component, OnInit, Input } from '@angular/core';
import { Phone } from 'src/app/shared/model/phone';
import { PhoneService } from 'src/app/shared/services/phone.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneType } from 'src/app/shared/enums/phone-type';
import { Contact } from 'src/app/shared/model/contact';
import { ContactService } from 'src/app/shared/services/contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {

  form: FormGroup;
  private phone: Phone;
  private contactId: number;
  private contact: Contact;

  constructor(private fb: FormBuilder,
    private phoneService: PhoneService,
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      number: ['', Validators.required],
      type: [PhoneType.NONE]
    });

    this.contactId =+ this.activatedRoute.snapshot.paramMap.get('id');
    this.getContact();
  }

  save(): void {

    this.phone = this.form.getRawValue() as Phone;
    this.phone.contact = this.contact;

    this.phoneService
      .save(this.phone)
      .subscribe((phone: Phone) => {
        this.phone = phone;
        this.route.navigate(['/contacts', 'edit', this.phone.contact.id]);
      });
  }

  getContact() : void {
    this.contactService
      .getContact(this.contactId)
      .subscribe(contact => {
        this.contact = contact;
      });
  }

  goBack(): void {
    this.route.navigate(['/contacts', 'edit', this.contactId]);
  }

  keys() : Array<string> {
    return this.phoneService.getPhoneTypes();
  }

}
