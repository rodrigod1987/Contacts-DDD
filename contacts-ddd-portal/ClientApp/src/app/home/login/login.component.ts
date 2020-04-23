import { Component, OnInit, Input } from '@angular/core';
import { UserAuth } from '../../shared/model/user';
import { AuthService } from '../../shared/services/auth.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  returnUrl : string;

  @Input() error: any;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {

    const user = this.form.getRawValue() as UserAuth;

    this.authService.login(user)
      .subscribe(
        () => {
          this.router.navigate([this.returnUrl]);
        },
        error => { this.error = error; }
      );

  }

}
