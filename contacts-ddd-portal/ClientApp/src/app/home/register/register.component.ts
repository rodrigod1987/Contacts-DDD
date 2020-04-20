import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../shared/services/register.service';
import { User } from '../../shared/model/user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() userName: string;
  @Input() password: string;

  constructor(private registerService: RegisterService,
    private route: Router,
    private location: Location) { }

  ngOnInit(): void {
  }

  save() {
      this.registerService
        .save(this.userName, this.password)
        .subscribe(() => { this.route.navigate(['/home']) });
  }

  goBack(): void {
    this.location.back();
  }

}
