import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DependentDropdownsComponent } from './dependent-dropdowns.component';

describe('DependentDropdownsComponent', () => {
  let component: DependentDropdownsComponent;
  let fixture: ComponentFixture<DependentDropdownsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DependentDropdownsComponent]
    });
    fixture = TestBed.createComponent(DependentDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
