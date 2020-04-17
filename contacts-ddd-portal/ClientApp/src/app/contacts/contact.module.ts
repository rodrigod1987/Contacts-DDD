import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactsAddComponent } from './contacts-add/contacts-add.component';
import { ContactDetailsComponent } from './contacts-details/contacts-details.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { FormsModule } from '@angular/forms';
import { PhoneListComponent } from './phone/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone/phone-details/phone-details.component';
import { PhoneAddComponent } from './phone/phone-add/phone-add.component';
import { FilterByName } from './contact-list/filter-by-name.pipe';
import { DirectivesModule } from '../shared/directives/directives.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ContactsAddComponent,
    ContactDetailsComponent,
    ContactListComponent,
    PhoneListComponent,
    PhoneDetailsComponent,
    PhoneAddComponent,
    FilterByName
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    DirectivesModule
  ]
})
export class ContactModule { }
