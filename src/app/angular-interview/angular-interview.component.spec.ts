import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularInterviewComponent } from './angular-interview.component';

describe('AngularInterviewComponent', () => {
  let component: AngularInterviewComponent;
  let fixture: ComponentFixture<AngularInterviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngularInterviewComponent]
    });
    fixture = TestBed.createComponent(AngularInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
