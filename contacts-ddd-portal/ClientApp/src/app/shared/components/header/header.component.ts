import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserAuth } from '../../model/user';
import { UserAuthService } from '../../services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  user: UserAuth;

  constructor(private userService: UserAuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.user = user);
  }

  isLogged() {
    return this.userService.isLogged();
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['/home','login']);
  }

}
