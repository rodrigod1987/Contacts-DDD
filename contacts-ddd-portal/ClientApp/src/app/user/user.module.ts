import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserAccountComponent } from './user-account/user-account.component';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user.routing.module';
import { DirectivesModule } from '../shared/directives/directives.module';

@NgModule({
  declarations: [
    UserComponent,
    UserAccountComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    DirectivesModule,
    UserRoutingModule
  ],
})
export class UserModule {}
