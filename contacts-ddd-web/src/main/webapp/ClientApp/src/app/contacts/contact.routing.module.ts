import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { AuthGuard } from '../core/guard/auth.guard';
import { ContactDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { PhoneAddComponent } from './phone/phone-add/phone-add.component';
import { PhoneDetailsComponent } from './phone/phone-details/phone-details.component';
import { ContactComponent } from './contact.component';


const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: 'edit/:id',
        component: ContactDetailsComponent,
        data: {
          title: 'Edit Contact'
        }
      },
      {
        path: 'new',
        component: ContactsAddComponent,
        data: {
          title: 'New Contact'
        }
      },
      {
        path: 'edit/:id/phone/new',
        component: PhoneAddComponent,
        data: {
          title: 'New Phone'
        }
      },
      {
        path: 'edit/:id/phone/edit/:phoneId',
        component: PhoneDetailsComponent,
        data: {
          title: 'Edit Phone'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
