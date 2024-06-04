import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantDishComponent } from './restaurant-dish.component';

describe('RestaurantDishComponent', () => {
  let component: RestaurantDishComponent;
  let fixture: ComponentFixture<RestaurantDishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurantDishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurantDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
