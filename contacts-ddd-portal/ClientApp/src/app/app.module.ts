import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactsComponent } from './contacts/contacts-list/contacts.component';
import { ContactDetailsComponent } from './contacts/contacts-details/contacts-details.component';
import { ContactsAddComponent} from './contacts/contacts-add/contacts-add.component';
import { ApiInterceptor } from './shared/intercept/api.interceptor';

import { environment } from 'src/environments/environment';
import { ApiAuthInterceptor } from './shared/intercept/api-auth.interceptor';
import { ErrorInterceptor } from './shared/intercept/error.interceptor';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { MessageComponent } from './message/message.component';
import { AutofocusDirective } from './shared/directives/autofocus.directive';
import { PhoneListComponent } from './phone/phone-list/phone-list.component';
import { PhoneDetailsComponent } from './phone/phone-details/phone-details.component';
import { PhoneAddComponent } from './phone/phone-add/phone-add.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactsComponent,
    ContactDetailsComponent,
    ContactsAddComponent,
    HomeComponent,
    RegisterComponent,
    MessageComponent,
    AutofocusDirective,
    PhoneListComponent,
    PhoneDetailsComponent,
    PhoneAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
