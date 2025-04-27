import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveDesigndComponent } from './leave-designd.component';

describe('LeaveDesigndComponent', () => {
  let component: LeaveDesigndComponent;
  let fixture: ComponentFixture<LeaveDesigndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaveDesigndComponent]
    });
    fixture = TestBed.createComponent(LeaveDesigndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
