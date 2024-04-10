import { TestBed } from '@angular/core/testing';

import { RestaurantBookingService } from './restaurant-booking.service';

describe('RestaurantBookingService', () => {
  let service: RestaurantBookingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantBookingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
