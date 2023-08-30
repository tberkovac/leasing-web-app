import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvCreationComponent } from './cv-creation.component';

describe('CvCreationComponent', () => {
  let component: CvCreationComponent;
  let fixture: ComponentFixture<CvCreationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvCreationComponent]
    });
    fixture = TestBed.createComponent(CvCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
