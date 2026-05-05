import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTestimonialSectionComponent } from './simple-testimonial-section.component';

describe('SimpleTestimonialSectionComponent', () => {
  let component: SimpleTestimonialSectionComponent;
  let fixture: ComponentFixture<SimpleTestimonialSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleTestimonialSectionComponent]
    });
    fixture = TestBed.createComponent(SimpleTestimonialSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
