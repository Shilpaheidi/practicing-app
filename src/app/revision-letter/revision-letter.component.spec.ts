import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionLetterComponent } from './revision-letter.component';

describe('RevisionLetterComponent', () => {
  let component: RevisionLetterComponent;
  let fixture: ComponentFixture<RevisionLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevisionLetterComponent]
    });
    fixture = TestBed.createComponent(RevisionLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
