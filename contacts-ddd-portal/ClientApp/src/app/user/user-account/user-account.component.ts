import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/model/user';

@Component({
  templateUrl: './user-account.component.html'
})
export class UserAccountComponent implements OnInit{

  user$: Observable<User>;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
  }

  edit() {

  }

  save() {

  }

  goBack() {

  }

}
