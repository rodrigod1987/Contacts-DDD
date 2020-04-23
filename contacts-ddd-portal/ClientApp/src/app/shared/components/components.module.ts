import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';
import { LoadingComponent } from './loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoadingIntercept } from './loading/loading.intercept';

@NgModule({
  declarations: [
    HeaderComponent,
    MessageComponent,
    FooterComponent,
    ValidationMessageComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MessageComponent,
    FooterComponent,
    ValidationMessageComponent,
    LoadingComponent
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingIntercept,
      multi: true
    }
  ]
})
export class ComponentsModule {}
