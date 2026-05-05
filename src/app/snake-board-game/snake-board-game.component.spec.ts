import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakeBoardGameComponent } from './snake-board-game.component';

describe('SnakeBoardGameComponent', () => {
  let component: SnakeBoardGameComponent;
  let fixture: ComponentFixture<SnakeBoardGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnakeBoardGameComponent]
    });
    fixture = TestBed.createComponent(SnakeBoardGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
