import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignPracticeComponent } from './design-practice.component';

describe('DesignPracticeComponent', () => {
  let component: DesignPracticeComponent;
  let fixture: ComponentFixture<DesignPracticeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DesignPracticeComponent]
    });
    fixture = TestBed.createComponent(DesignPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
