import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingButtonComponent } from './voting-button.component';

describe('VotingButtonComponent', () => {
  let component: VotingButtonComponent;
  let fixture: ComponentFixture<VotingButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingButtonComponent]
    });
    fixture = TestBed.createComponent(VotingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
