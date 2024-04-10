import { TestBed } from '@angular/core/testing';

import { RestaurantQueueService } from './restaurant-queue.service';

describe('RestaurantQueueService', () => {
  let service: RestaurantQueueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantQueueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
