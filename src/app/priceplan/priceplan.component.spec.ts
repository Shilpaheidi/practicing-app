import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceplanComponent } from './priceplan.component';

describe('PriceplanComponent', () => {
  let component: PriceplanComponent;
  let fixture: ComponentFixture<PriceplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceplanComponent]
    });
    fixture = TestBed.createComponent(PriceplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
