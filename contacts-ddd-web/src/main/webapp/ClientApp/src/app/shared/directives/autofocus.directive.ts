import { Directive, AfterViewInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[ap-autofocus]'
})
export class AutofocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.el.nativeElement.focus();
  }

}
