import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeRoutingModule } from './home.routing.module';
import { IndexComponent } from './index/index.component';
import { DirectivesModule } from '../shared/directives/directives.module';
import { ComponentsModule } from '../shared/components/components.module';
import { ValidateComponent } from './validate/validate.component';

@NgModule({
  declarations: [
    HomeComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    ValidateComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ComponentsModule,
    DirectivesModule,
    HomeRoutingModule
  ],
  exports: []
})
export class HomeModule {}
