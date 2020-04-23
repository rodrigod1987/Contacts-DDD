import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { UserAuthService } from '../../services/user-auth.service';
import { UserAuth } from '../../model/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  title = 'Contacts DDD';
  isCollapsed = true;
  user : UserAuth;

  constructor(private userService: UserAuthService,
    private route: Router) {
      this.userService
        .getUser()
        .subscribe(user => this.user = user);
    }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.route.navigate(['/home','login']);
    this.isCollapsed = true;
  }

}
