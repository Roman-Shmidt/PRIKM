import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckMenuDishesComponent } from './check-menu-dishes.component';

describe('CheckMenuDishesComponent', () => {
  let component: CheckMenuDishesComponent;
  let fixture: ComponentFixture<CheckMenuDishesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckMenuDishesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckMenuDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
