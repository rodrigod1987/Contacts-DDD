import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  title = 'Contacts DDD';
  isCollapsed = true;
  user$ : Observable<User>;
  user : User;

  constructor(private userService: UserService,
    private route: Router) {
      this.user$ = this.userService.getUser();
      this.user$.subscribe(user => this.user = user);
    }

  ngOnInit(): void {
  }

  logout() {
    this.userService.logout();
    this.route.navigate(['login']);
    this.isCollapsed = true;
  }

}
