import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCvComponentsComponent } from './list-cv-components.component';

describe('ListCvComponentsComponent', () => {
  let component: ListCvComponentsComponent;
  let fixture: ComponentFixture<ListCvComponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListCvComponentsComponent]
    });
    fixture = TestBed.createComponent(ListCvComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
