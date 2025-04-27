import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTaskComponent } from './dashboard-task.component';

describe('DashboardTaskComponent', () => {
  let component: DashboardTaskComponent;
  let fixture: ComponentFixture<DashboardTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardTaskComponent]
    });
    fixture = TestBed.createComponent(DashboardTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
