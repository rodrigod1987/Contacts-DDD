import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './shared/intercept/api.interceptor';

import { environment } from 'src/environments/environment';
import { ApiAuthInterceptor } from './shared/intercept/api-auth.interceptor';
import { ErrorInterceptor } from './shared/intercept/error.interceptor';
import { MessageComponent } from './message/message.component';
import { ContactModule } from './contacts/contact.module';
import { HomeModule } from './home/home.module';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
    ContactModule,
    ComponentsModule
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
