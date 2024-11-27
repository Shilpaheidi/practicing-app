import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataManipulationComponent } from './data-manipulation.component';

describe('DataManipulationComponent', () => {
  let component: DataManipulationComponent;
  let fixture: ComponentFixture<DataManipulationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataManipulationComponent]
    });
    fixture = TestBed.createComponent(DataManipulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
