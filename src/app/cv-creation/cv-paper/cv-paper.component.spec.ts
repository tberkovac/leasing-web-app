import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPaperComponent } from './cv-paper.component';

describe('CvPaperComponent', () => {
  let component: CvPaperComponent;
  let fixture: ComponentFixture<CvPaperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvPaperComponent]
    });
    fixture = TestBed.createComponent(CvPaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
