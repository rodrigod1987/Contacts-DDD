import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { FooterComponent } from './footer/footer.component';
import { ValidationMessageComponent } from './validation-message/validation-message.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MessageComponent,
    FooterComponent,
    ValidationMessageComponent
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
    ValidationMessageComponent
  ]
})
export class ComponentsModule {}
