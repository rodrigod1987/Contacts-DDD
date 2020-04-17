import { Component, OnInit, Input } from '@angular/core';
import { Phone } from 'src/app/shared/model/Phone';
import { PhoneService } from 'src/app/shared/services/phone.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneType } from 'src/app/shared/enums/phone-type';
import { Contact } from 'src/app/shared/model/Contact';
import { ContactService } from 'src/app/shared/services/contact.service';

@Component({
  selector: 'app-phone-add',
  templateUrl: './phone-add.component.html',
  styleUrls: ['./phone-add.component.css']
})
export class PhoneAddComponent implements OnInit {

  @Input() phone: Phone = {
    contact: null,
    id: 0,
    number: null,
    type: PhoneType.NONE
  };

  private contactId: number;

  constructor(private phoneService: PhoneService,
    private contactService: ContactService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit(): void {
    this.contactId =+ this.activatedRoute.snapshot.paramMap.get('id');
    this.getContact();
  }

  save(): void {
    this.phoneService
      .save(this.phone)
      .subscribe((phone: Phone) => {
        this.phone = phone;
        this.route.navigate([`/contacts/edit/${phone.contact.id}`]);
      });
  }

  getContact() : void {
    this.contactService
      .getContact(this.contactId)
      .subscribe(contact => {
        this.phone.contact = contact;
      });
  }

  goBack(): void {
    this.route.navigate(['contacts/edit', this.contactId]);
  }

  keys() : Array<string> {
    return this.phoneService.getPhoneTypes();
  }

}
