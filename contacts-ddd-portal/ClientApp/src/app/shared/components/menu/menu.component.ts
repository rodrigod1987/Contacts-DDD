import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';
import { UserAuth } from '../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isShown = false;
  user : UserAuth;

  constructor(private userService: UserAuthService,
    private router: Router) {}

  ngOnInit(): void {
    this.userService
        .getUser()
        .subscribe(user => this.user = user);
  }

  toggle() {
    this.isShown = !this.isShown;
  }

}
