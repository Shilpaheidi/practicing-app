import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReusableTableSearchComponent } from './reusable-table-search.component';

describe('ReusableTableSearchComponent', () => {
  let component: ReusableTableSearchComponent;
  let fixture: ComponentFixture<ReusableTableSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReusableTableSearchComponent]
    });
    fixture = TestBed.createComponent(ReusableTableSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
