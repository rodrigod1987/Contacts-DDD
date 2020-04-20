import { Component, OnInit } from '@angular/core';
import { Phone } from 'src/app/shared/model/phone';
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneService } from 'src/app/shared/services/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Phone[];

  constructor(private router: ActivatedRoute,
    private phoneService: PhoneService) { }

  ngOnInit(): void {
    this.getPhones();
  }

  private getPhones() {
    let id = this.router.snapshot.paramMap.get('id');
    this.phoneService
      .getPhones(id)
      .subscribe(phones => this.phones = phones);
  }

  delete(id: number) {
    this.phoneService
      .delete(id)
      .subscribe(() => { location.reload(); });
  }

}
