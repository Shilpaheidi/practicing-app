import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingDashboardComponent } from './voting-dashboard.component';

describe('VotingDashboardComponent', () => {
  let component: VotingDashboardComponent;
  let fixture: ComponentFixture<VotingDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingDashboardComponent]
    });
    fixture = TestBed.createComponent(VotingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
