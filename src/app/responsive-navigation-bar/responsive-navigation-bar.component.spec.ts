import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveNavigationBarComponent } from './responsive-navigation-bar.component';

describe('ResponsiveNavigationBarComponent', () => {
  let component: ResponsiveNavigationBarComponent;
  let fixture: ComponentFixture<ResponsiveNavigationBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveNavigationBarComponent]
    });
    fixture = TestBed.createComponent(ResponsiveNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
