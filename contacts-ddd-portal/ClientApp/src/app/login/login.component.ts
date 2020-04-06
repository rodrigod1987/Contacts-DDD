import { Component, OnInit, Input } from '@angular/core';
import { User } from '../shared/model/User';
import { AuthService } from '../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  returnUrl : string;
  @Input() error: any;

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
    if (this.user.userName.length > 0 && this.user.password.length > 0)
      this.authService.login(this.user.userName, this.user.password)
        .pipe(first())
        .subscribe(
          () => {
            this.router.navigate([this.returnUrl]);
          },
          error => { this.error = error; }
        );
  }

}
