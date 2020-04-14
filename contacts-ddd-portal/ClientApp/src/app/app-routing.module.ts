import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts-list/contacts.component';
import { ContactDetailsComponent } from './contacts/contacts-details/contacts-details.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ContactsAddComponent } from './contacts/contacts-add/contacts-add.component';
import { PhoneAddComponent } from './phone/phone-add/phone-add.component';
import { PhoneDetailsComponent } from './phone/phone-details/phone-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard] },
  { path: 'contacts/edit/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
  { path: 'contacts/new', component: ContactsAddComponent, canActivate: [AuthGuard] },
  { path: 'contacts/edit/:id/phone/new', component: PhoneAddComponent, canActivate: [AuthGuard] },
  { path: 'contacts/edit/:id/phone/edit/:phoneId', component: PhoneDetailsComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
