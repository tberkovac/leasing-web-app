import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FocusDirective } from '../directives/focus.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cv-creation',
  templateUrl: './cv-creation.component.html',
  styleUrls: ['./cv-creation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CvCreationComponent implements AfterViewInit {
  @ViewChildren('inputField') inputFields!: QueryList<ElementRef>;

  textFields : any[] = [{value: 'good'}, {value: 'great'}]
  indexToFocus = 0

  /**
   *
   */
  constructor(private renderer2: Renderer2, private cdr: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    console.log('After view init')
    console.log(this.inputFields)
  }

  changeValue(event: any, index: number): void {
    console.log(event)
    this.textFields[index]= event.value
  }

  changed() {
    console.log('rendered again')
  }

  createTextField(index: number): void {
    console.log('Created ' + index)
    this.textFields.splice(index + 1, 0, {value: ''}) 
 //   this.textFields = [...this.textFields];   
    this.setFocusedIndex(index+1)

  }

  removeTextField(index: number): void {
    var value = this.textFields[index].value
    if (value || this.textFields.length === 1) {
      return
    }
    this.textFields.splice(index, 1)
    if(this.indexToFocus === this.textFields.length) {
      this.setFocusedIndex(index-1)
    } else {
      this.setFocusedIndex(index)
    }

    this.textFields = [...this.textFields];

  }

  setFocusedIndex(index: number) {
    this.indexToFocus = index;
  }

  trackByIndex(index: number, item: any) {
    return index;
  }
}
