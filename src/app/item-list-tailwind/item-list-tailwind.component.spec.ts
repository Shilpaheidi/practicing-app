import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemListTailwindComponent } from './item-list-tailwind.component';

describe('ItemListTailwindComponent', () => {
  let component: ItemListTailwindComponent;
  let fixture: ComponentFixture<ItemListTailwindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemListTailwindComponent]
    });
    fixture = TestBed.createComponent(ItemListTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
