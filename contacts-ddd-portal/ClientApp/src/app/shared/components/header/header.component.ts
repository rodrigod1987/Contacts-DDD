import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  title = 'Contacts DDD';
  isCollapsed = true;

  constructor(private authService: AuthService,
    private route: Router) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.isCollapsed = true;
  }

  goHome() {
    this.route.navigate(['home']);
  }

  goContacts() {
    this.route.navigate(['contacts']);
  }

  goLogin() {
    this.route.navigate(['login']);
  }

  goAccount() {
    this.route.navigate(['account']);
  }

  getLoggedUser() {
    return this.authService.getCurrentUser();
  }

}
