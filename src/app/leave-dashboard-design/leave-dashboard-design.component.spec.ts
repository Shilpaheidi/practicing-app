import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDashboardDesignComponent } from './leave-dashboard-design.component';

describe('LeaveDashboardDesignComponent', () => {
  let component: LeaveDashboardDesignComponent;
  let fixture: ComponentFixture<LeaveDashboardDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveDashboardDesignComponent]
    });
    fixture = TestBed.createComponent(LeaveDashboardDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
