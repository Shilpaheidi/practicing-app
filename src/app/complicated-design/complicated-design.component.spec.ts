import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplicatedDesignComponent } from './complicated-design.component';

describe('ComplicatedDesignComponent', () => {
  let component: ComplicatedDesignComponent;
  let fixture: ComponentFixture<ComplicatedDesignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComplicatedDesignComponent]
    });
    fixture = TestBed.createComponent(ComplicatedDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
