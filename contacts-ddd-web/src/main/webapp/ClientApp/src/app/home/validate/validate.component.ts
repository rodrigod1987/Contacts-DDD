import { Component, OnInit } from '@angular/core';
import { ValidateService } from './validate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {

  private token: string = "";

  constructor(private validateService: ValidateService, 
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.token = this.activatedRoute.snapshot.queryParams.token;
    console.log(this.token);
  }

  activate() {
    this.validateService
      .activateUser(this.token)
      .subscribe(() => { this.router.navigate(['/home', 'login']) });;
  }

}
