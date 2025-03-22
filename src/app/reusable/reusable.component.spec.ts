import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableComponent } from './reusable.component';

describe('ReusableComponent', () => {
  let component: ReusableComponent;
  let fixture: ComponentFixture<ReusableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableComponent]
    });
    fixture = TestBed.createComponent(ReusableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
