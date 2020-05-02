import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/shared/model/phone';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/contacts/phone/phone.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones$: Observable<Phone[]>;
  private contactId: string;

  constructor(private router: ActivatedRoute,
    private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getPhones();
  }

  private getPhones() {
    this.contactId = this.router.snapshot.params.id;
    this.phones$ = this.phoneService
      .getPhones(this.contactId);
  }

  delete(id: number) {
    this.phoneService
      .delete(id)
      .pipe(switchMap(() => this.phones$ = this.phoneService.getPhones(this.contactId)))
      .subscribe();
  }

}
