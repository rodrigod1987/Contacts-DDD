import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

import { UserAuthService } from 'src/app/core/auth/user-auth.service';
import { UserAuth } from 'src/app/shared/model/user.auth';

@Component({
  templateUrl: './user-account.component.html'
})
export class UserAccountComponent implements OnInit{

  user$: Observable<UserAuth>;
  form: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserAuthService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
    });

    this.user$ = this.userService.getUser();
  }

  edit() {

  }

  save() {

  }

  goBack() {

  }

}
