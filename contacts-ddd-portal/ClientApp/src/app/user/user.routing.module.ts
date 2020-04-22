import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAccountComponent } from './user-account/user-account.component';
import { UserComponent } from './user.component';
import { AuthGuard } from '../shared/guard/auth.guard';

const routes: Routes = [
  { path: '', component: UserComponent, canActivate: [AuthGuard], children: [
      { path: '', component: UserAccountComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
