import { Component, OnInit, Input } from '@angular/core';
import { UserAuth } from '../../shared/model/user';
import { AuthService } from '../../core/auth/auth.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';
import { Exception } from 'src/app/shared/model/exception';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  returnUrl : string;

  @Input() error: Exception;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private loadingService: LoadingService) { }

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
        () => this.router.navigate([this.returnUrl]) ,
        (err: any) => {
          this.loadingService.stop();
          debugger;
          this.error = JSON.parse(err.error) ;
          console.log(this.error);

        }
      );

  }

}
