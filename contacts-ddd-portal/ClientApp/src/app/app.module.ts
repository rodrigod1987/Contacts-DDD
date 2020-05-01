import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptor } from './core/intercept/api.interceptor';

import { environment } from 'src/environments/environment';
import { ApiAuthInterceptor } from './core/intercept/api-auth.interceptor';
import { ErrorInterceptor } from './core/intercept/error.interceptor';
import { ComponentsModule } from './shared/components/components.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { GlobalErrorHanler } from './shared/handlers/global-error.handler';
import { RouterModule } from '@angular/router';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    ComponentsModule,
    NotFoundModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    { provide: 'BASE_API_URL', useValue: environment.apiUrl },
    { provide: HTTP_INTERCEPTORS, useClass: ApiAuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: GlobalErrorHanler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
