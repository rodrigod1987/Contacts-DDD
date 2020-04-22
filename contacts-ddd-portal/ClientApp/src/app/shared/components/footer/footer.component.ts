import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ap-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  today: Date;

  constructor() {}

  ngOnInit(): void {
    this.today = new Date();
  }

}