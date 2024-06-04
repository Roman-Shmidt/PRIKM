import { TestBed } from '@angular/core/testing';

import { ClientRestaurantService } from './client-restaurant.service';

describe('ClientRestaurantService', () => {
  let service: ClientRestaurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientRestaurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
