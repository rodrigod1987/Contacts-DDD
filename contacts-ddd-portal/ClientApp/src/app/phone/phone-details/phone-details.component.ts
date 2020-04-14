import { Component, OnInit, Input } from '@angular/core';
import { PhoneType } from 'src/app/shared/enums/phone-type';
import { Phone } from 'src/app/shared/model/Phone';
import { PhoneService } from 'src/app/shared/services/phone.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit {

  //phoneTypes = Object.keys(PhoneType).map(k => ({key: k, value: PhoneType[k as any]}));

  @Input() phone: Phone;

  constructor(private phoneService: PhoneService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getContact();
  }

  private getContact() {
    let phoneId =+ this.activatedRoute.snapshot.paramMap.get('phoneId');
    this.phoneService.getPhone(phoneId)
      .subscribe(p => { this.phone = p; });
  }

  edit(): void {
    this.phoneService.edit(this.phone);
  }

  goBack() : void {
    this.route.navigate([`/contacts/edit/${this.phone.contact.id}`]);
  }

  keys() : Array<string> {
    var keys = Object.keys(PhoneType);
    return keys.slice(keys.length / 2);
  }

}
