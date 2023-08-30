import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnChanges {

  @Input() appFocus: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['appFocus'] && this.appFocus && this.el.nativeElement.tagName === 'INPUT') {
      this.el.nativeElement.focus();
    }
  }
}
