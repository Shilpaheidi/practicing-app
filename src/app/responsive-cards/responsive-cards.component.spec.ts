import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveCardsComponent } from './responsive-cards.component';

describe('ResponsiveCardsComponent', () => {
  let component: ResponsiveCardsComponent;
  let fixture: ComponentFixture<ResponsiveCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResponsiveCardsComponent]
    });
    fixture = TestBed.createComponent(ResponsiveCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
