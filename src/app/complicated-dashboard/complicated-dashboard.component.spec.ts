import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplicatedDashboardComponent } from './complicated-dashboard.component';

describe('ComplicatedDashboardComponent', () => {
  let component: ComplicatedDashboardComponent;
  let fixture: ComponentFixture<ComplicatedDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplicatedDashboardComponent]
    });
    fixture = TestBed.createComponent(ComplicatedDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
