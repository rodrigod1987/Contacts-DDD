import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [HeaderComponent]
})
export class ComponentsModule {}
