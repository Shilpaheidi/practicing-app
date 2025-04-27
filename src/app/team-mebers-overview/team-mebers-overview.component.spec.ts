import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamMebersOverviewComponent } from './team-mebers-overview.component';

describe('TeamMebersOverviewComponent', () => {
  let component: TeamMebersOverviewComponent;
  let fixture: ComponentFixture<TeamMebersOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeamMebersOverviewComponent]
    });
    fixture = TestBed.createComponent(TeamMebersOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
