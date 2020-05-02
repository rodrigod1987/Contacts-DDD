import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from './register.service';
import { UserAuth } from '../../shared/model/user';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
    private registerService: RegisterService,
    private route: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      birthdate: ['', Validators.required]
    });
  }

  save() {
    const user = this.form.getRawValue() as UserAuth;
    this.registerService
      .save(user)
      .subscribe(() => { this.route.navigate(['/home', 'login']) });
  }

  goBack(): void {
    this.location.back();
  }

}
