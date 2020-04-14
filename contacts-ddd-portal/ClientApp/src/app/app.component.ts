import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClientApp';
  isCollapsed = true;
  today = new Date();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this.isCollapsed = true;
  }

  getLoggedUser() {
    return this.authService.getCurrentUser();
  }

}
