import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWithCardsComponent } from './dashboard-with-cards.component';

describe('DashboardWithCardsComponent', () => {
  let component: DashboardWithCardsComponent;
  let fixture: ComponentFixture<DashboardWithCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardWithCardsComponent]
    });
    fixture = TestBed.createComponent(DashboardWithCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
