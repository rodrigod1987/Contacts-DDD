import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { AuthGuard } from '../shared/guard/auth.guard';
import { ContactDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { PhoneAddComponent } from './phone/phone-add/phone-add.component';
import { PhoneDetailsComponent } from './phone/phone-details/phone-details.component';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  { path: '', component: ContactComponent, canActivate: [AuthGuard], children: [
      { path: '', component: ContactListComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id', component: ContactDetailsComponent, canActivate: [AuthGuard] },
      { path: 'new', component: ContactsAddComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id/phone/new', component: PhoneAddComponent, canActivate: [AuthGuard] },
      { path: 'edit/:id/phone/edit/:phoneId', component: PhoneDetailsComponent, canActivate: [AuthGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
