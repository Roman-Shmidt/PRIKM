import { TestBed } from '@angular/core/testing';

import { RestaurantDishService } from './restaurant-dish.service';

describe('RestaurantDishService', () => {
  let service: RestaurantDishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantDishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
