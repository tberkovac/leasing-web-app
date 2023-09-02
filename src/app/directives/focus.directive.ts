import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnChanges {

  @Input() appFocus: boolean = false;

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.el.nativeElement.tagName)
    if (changes['appFocus'] && changes['appFocus'].currentValue === true  && this.el.nativeElement.tagName === 'TEXTAREA') {
      this.el.nativeElement.focus();
      console.log('FOCUUUUUSEEED')
    }
  }
}
