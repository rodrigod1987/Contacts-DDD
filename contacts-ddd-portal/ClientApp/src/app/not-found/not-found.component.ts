import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './not-found.component.html'
})
export class NotFoundComponent implements OnInit {

  returnUrl : string;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
    if(this.returnUrl)
      this.router.navigate(['/home', 'login'], { queryParams: { returnUrl: this.returnUrl }});
  }



}
