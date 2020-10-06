import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from '../core/guard/login.guard';
import { HomeComponent } from './home.component';
import { ValidateComponent } from './validate/validate.component';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: IndexComponent
      },
      {
        path: 'validate',
        component: ValidateComponent,
        data: {
          title: 'Validate User'
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [LoginGuard],
        data: {
          title: 'Login'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoginGuard],
        data: {
          title: 'Register'
        }
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
