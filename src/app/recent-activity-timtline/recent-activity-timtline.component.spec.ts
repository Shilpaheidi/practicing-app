import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActivityTimtlineComponent } from './recent-activity-timtline.component';

describe('RecentActivityTimtlineComponent', () => {
  let component: RecentActivityTimtlineComponent;
  let fixture: ComponentFixture<RecentActivityTimtlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentActivityTimtlineComponent]
    });
    fixture = TestBed.createComponent(RecentActivityTimtlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
