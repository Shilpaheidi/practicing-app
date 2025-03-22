import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexDashboardComponent } from './complex-dashboard.component';

describe('ComplexDashboardComponent', () => {
  let component: ComplexDashboardComponent;
  let fixture: ComponentFixture<ComplexDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplexDashboardComponent]
    });
    fixture = TestBed.createComponent(ComplexDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
