import { Component, OnInit, Input } from '@angular/core';
import { User } from '../model/User';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl : string;

  @Input() user: User = {
    userName: '',
    password: '',
    token: ''
  };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    debugger;
    this.authService.login(this.user.userName, this.user.password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
      });
  }

}
