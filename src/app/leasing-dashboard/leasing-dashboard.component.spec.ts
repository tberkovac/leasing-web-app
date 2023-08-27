import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeasingDashboardComponent } from './leasing-dashboard.component';

describe('LeasingDashboardComponent', () => {
  let component: LeasingDashboardComponent;
  let fixture: ComponentFixture<LeasingDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeasingDashboardComponent]
    });
    fixture = TestBed.createComponent(LeasingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
