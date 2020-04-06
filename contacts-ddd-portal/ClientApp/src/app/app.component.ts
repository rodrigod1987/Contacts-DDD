import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';
import { User } from './shared/model/User';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  isCollapsed = true;

  constructor(private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/login"]);
    this.isCollapsed = true;
  }

  getLoggedUser() {
    return this.authService.getCurrentUser();
  }

}
