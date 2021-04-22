import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../../core/auth/user-auth.service';
import { UserAuth } from '../../model/user.auth';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  today: Date;
  isShown = false;
  user : UserAuth;

  constructor(private userService: UserAuthService) {}

  ngOnInit(): void {
    this.today = new Date();
    this.userService
        .getUser()
        .subscribe(user => this.user = user);
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
